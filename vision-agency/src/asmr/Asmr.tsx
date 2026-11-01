// Reel ASMR : plans rapprochés avec leur son naturel, une phrase, un carton de fin. Le son porte tout.
import React from 'react';
import {AbsoluteFill, Audio, OffthreadVideo, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {FRAUNCES, MONO} from '../fonts';
import {EndCard} from '../explainer/Explainer';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const M = 72;
export const CLIP = 150; // 5 s par plan
export const END = 75; // 2,5 s de carton

export type AsmrProps = {kicker: string; clips: string[]; line: string; cta: string; music?: string};
export const asmrDuration = (clips: number) => clips * CLIP + END;

const rich = (text: string) =>
	text.split(/(\*[^*]+\*)/g).map((part, i) =>
		part.startsWith('*') ? <span key={i} style={{color: GOLD, fontStyle: 'italic'}}>{part.slice(1, -1)}</span> : <span key={i}>{part}</span>,
	);

const Line: React.FC<{text: string}> = ({text}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = spring({frame, fps, config: {damping: 200}});
	return (
		<div style={{position: 'absolute', left: M, right: M, bottom: 300, opacity: s, transform: `translateY(${(1 - s) * 24}px)`}}>
			<div style={{width: 56, height: 1.5, background: GOLD, marginBottom: 26}} />
			<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: 62, lineHeight: 1.1, letterSpacing: '-0.02em', color: IVORY, textShadow: '0 4px 30px rgba(0,0,0,0.7)'}}>{rich(text)}</div>
		</div>
	);
};

export const Asmr: React.FC<AsmrProps> = ({kicker, clips, line, cta, music}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const endFrom = clips.length * CLIP;
	return (
		<AbsoluteFill style={{background: INK}}>
			{clips.map((c, i) => (
				<Sequence key={c} from={i * CLIP} durationInFrames={CLIP}>
					<OffthreadVideo
						src={staticFile(c)}
						style={{width: '100%', height: '100%', objectFit: 'cover'}}
						volume={(f) => interpolate(f, [0, 6, CLIP - 6, CLIP], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
					/>
				</Sequence>
			))}
			<AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.55) 100%)', opacity: frame < endFrom ? 1 : 0}} />
			<Sequence from={endFrom - 100} durationInFrames={100}>
				<Line text={line} />
			</Sequence>
			<Sequence from={endFrom} durationInFrames={durationInFrames - endFrom}>
				<EndCard cta={cta} />
			</Sequence>
			<div style={{position: 'absolute', top: 140, left: M, right: M, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: frame < endFrom ? 1 : 0}}>
				<Wordmark color={IVORY} size={20} />
				<div style={{fontFamily: MONO, fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,235,224,0.85)'}}>{kicker}</div>
			</div>
			{music ? (
				<Audio
					src={staticFile(music)}
					loop
					volume={(f) => 0.12 * interpolate(f, [0, 45, durationInFrames - 60, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
				/>
			) : null}
			<Grain opacity={0.05} />
		</AbsoluteFill>
	);
};
