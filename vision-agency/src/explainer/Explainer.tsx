// Reel explicatif : voix off + sous-titres phrase par phrase + plans qui changent à chaque phrase + carton de fin.
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import React from 'react';
import {
	AbsoluteFill,
	Audio,
	CalculateMetadataFunction,
	Loop,
	OffthreadVideo,
	Sequence,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {FRAUNCES, MONO, SANS} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const M = 64;
const END_SECONDS = 2.6;

export type ExplainerProps = {
	kicker: string;
	sentences: string[];
	clips: string[]; // public/clips/... ou public/photos/... (mp4)
	audio?: string; // public/vo/xx.wav — absent = version sans voix (texte + musique + son des plans)
	audioSeconds?: number;
	cta: string;
	music?: string; // public/music/xx.m4a, lit de musique discret
};

export const calculateExplainerMetadata: CalculateMetadataFunction<ExplainerProps> = async ({props}) => {
	const seconds = props.audioSeconds ?? (props.audio ? await getAudioDurationInSeconds(staticFile(props.audio)) : props.sentences.length * 3.8);
	return {
		props: {...props, audioSeconds: seconds},
		durationInFrames: Math.ceil((seconds + END_SECONDS) * 30),
	};
};

const rich = (text: string) =>
	text.split(/(\*[^*]+\*)/g).map((part, i) =>
		part.startsWith('*') ? (
			<span key={i} style={{color: GOLD, fontStyle: 'italic'}}>{part.slice(1, -1)}</span>
		) : (
			<span key={i}>{part}</span>
		),
	);

export const Explainer: React.FC<ExplainerProps> = ({kicker, sentences, clips, audio, audioSeconds = 30, cta, music}) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const voFrames = Math.round(audioSeconds * fps);
	const total = sentences.reduce((a, s) => a + s.replace(/\*/g, '').length + 12, 0);
	let cursor = 0;
	const windows = sentences.map((s) => {
		const w = ((s.replace(/\*/g, '').length + 12) / total) * voFrames;
		const from = Math.round(cursor);
		cursor += w;
		return {from, len: Math.round(w), text: s};
	});
	const endFrom = voFrames;

	return (
		<AbsoluteFill style={{background: INK}}>
			{windows.map((w, i) => (
				<Sequence key={i} from={w.from} durationInFrames={w.len + 2}>
					<AbsoluteFill>
						<Loop durationInFrames={150}>
							<OffthreadVideo
								src={staticFile(clips[i % clips.length])}
								muted={Boolean(audio)}
								volume={audio ? 0 : 0.55}
								style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1.02 + (i % 2) * 0.04})`}}
							/>
						</Loop>
						<AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.78) 100%)'}} />
						<Caption text={w.text} len={w.len} />
					</AbsoluteFill>
				</Sequence>
			))}

			<Sequence from={endFrom} durationInFrames={durationInFrames - endFrom}>
				<EndCard cta={cta} />
			</Sequence>

			<div style={{position: 'absolute', top: 140, left: M, right: M, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: frame < endFrom ? 1 : 0}}>
				<Wordmark color={IVORY} size={20} />
				<div style={{fontFamily: MONO, fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,235,224,0.85)'}}>{kicker}</div>
			</div>

			{audio ? <Audio src={staticFile(audio)} /> : null}
			{music ? (
				<Audio
					src={staticFile(music)}
					loop
					volume={(f) => 0.16 * interpolate(f, [0, 30, durationInFrames - 60, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
				/>
			) : null}
			<Grain opacity={0.05} />
		</AbsoluteFill>
	);
};

const Caption: React.FC<{text: string; len: number}> = ({text, len}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = spring({frame, fps, config: {damping: 200, stiffness: 120}});
	const out = interpolate(frame, [len - 6, len], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<div
			style={{
				position: 'absolute',
				left: M,
				right: M,
				bottom: 380,
				fontFamily: FRAUNCES,
				fontWeight: 500,
				fontSize: 66,
				lineHeight: 1.1,
				letterSpacing: '-0.02em',
				color: IVORY,
				textShadow: '0 4px 30px rgba(0,0,0,0.6)',
				opacity: s * out,
				transform: `translateY(${(1 - s) * 24}px)`,
			}}
		>
			{rich(text)}
		</div>
	);
};

export const EndCard: React.FC<{cta: string}> = ({cta}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = spring({frame, fps, config: {damping: 200, stiffness: 90}});
	return (
		<AbsoluteFill style={{background: INK, justifyContent: 'center', alignItems: 'center', gap: 30}}>
			<div style={{fontFamily: FRAUNCES, fontWeight: 700, fontSize: 210, lineHeight: 0.9, color: GOLD, letterSpacing: `${0.3 - 0.25 * s}em`, opacity: s}}>VISION</div>
			<div style={{fontFamily: FRAUNCES, fontStyle: 'italic', fontSize: 40, color: IVORY, opacity: s}}>L’agence vidéo des restaurants suisses</div>
			<div style={{marginTop: 40, padding: '18px 32px', border: `1.5px solid ${GOLD}`, borderRadius: 999, fontFamily: MONO, fontSize: 21, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, opacity: interpolate(frame, [12, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>{cta}</div>
			<div style={{position: 'absolute', bottom: 150, fontFamily: SANS, fontSize: 24, color: 'rgba(240,235,224,0.6)'}}>@vision.agency</div>
		</AbsoluteFill>
	);
};
