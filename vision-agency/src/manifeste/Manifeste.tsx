// Reel « manifeste » : bande cinéma 2.39:1 centrée sur noir, un mot fin par plan, musique. Aucune voix.
import React from 'react';
import {AbsoluteFill, Audio, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {MONO, SANS, FRAUNCES} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const BAND_H = 452; // 1080 / 2.39
export const SHOT = 66; // 2.2 s
export const END = 84;

export type ManifesteProps = {
	kicker: string;
	shots: {clip: string; text: string; gold?: boolean}[];
	music?: string;
	cta: string;
};

export const manifesteDuration = (n: number) => n * SHOT + END;

const Word: React.FC<{text: string; gold?: boolean}> = ({text, gold}) => {
	const frame = useCurrentFrame();
	const o = interpolate(frame, [0, 10, SHOT - 12, SHOT], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const ls = interpolate(frame, [0, SHOT], [0.34, 0.4]);
	return (
		<div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', opacity: o, background: 'radial-gradient(ellipse 62% 70% at center, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 100%)'}}>
			<div style={{padding: '0 70px', fontFamily: SANS, fontWeight: 400, fontSize: 34, letterSpacing: `${ls}em`, textTransform: 'uppercase', color: gold ? GOLD : IVORY, textShadow: '0 2px 6px rgba(0,0,0,0.95), 0 0 28px rgba(0,0,0,0.9)', lineHeight: 1.5}}>{text}</div>
		</div>
	);
};

const EndCard: React.FC<{cta: string}> = ({cta}) => {
	const frame = useCurrentFrame();
	const o = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp'});
	return (
		<AbsoluteFill style={{background: INK, alignItems: 'center', justifyContent: 'center', opacity: o}}>
			<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: 118, letterSpacing: '0.16em', color: GOLD}}>VISION</div>
			<div style={{marginTop: 18, fontFamily: SANS, fontWeight: 300, fontSize: 26, letterSpacing: '0.3em', textTransform: 'uppercase', color: IVORY}}>{cta}</div>
			<div style={{position: 'absolute', bottom: 150, fontFamily: MONO, fontSize: 18, letterSpacing: '0.16em', color: 'rgba(240,235,224,0.6)'}}>@vision.agency</div>
		</AbsoluteFill>
	);
};

export const Manifeste: React.FC<ManifesteProps> = ({kicker, shots, music, cta}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, height} = useVideoConfig();
	const endFrom = shots.length * SHOT;
	const top = (height - BAND_H) / 2;
	return (
		<AbsoluteFill style={{background: INK}}>
			{shots.map((s, i) => (
				<Sequence key={i} from={i * SHOT} durationInFrames={SHOT}>
					<div style={{position: 'absolute', left: 0, right: 0, top, height: BAND_H, overflow: 'hidden', background: '#000'}}>
						<OffthreadVideo src={staticFile(s.clip)} volume={(f) => 0.35 * interpolate(f, [0, 6, SHOT - 6, SHOT], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1 + (i % 2) * 0.03})`}} />
						<AbsoluteFill style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)'}} />
						<Word text={s.text} gold={s.gold} />
					</div>
				</Sequence>
			))}
			<Sequence from={endFrom} durationInFrames={durationInFrames - endFrom}>
				<EndCard cta={cta} />
			</Sequence>
			<div style={{position: 'absolute', top: 140, left: 64, right: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: frame < endFrom ? 1 : 0}}>
				<Wordmark color={IVORY} size={20} />
				<div style={{fontFamily: MONO, fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,235,224,0.85)'}}>{kicker}</div>
			</div>
			{music ? <Audio src={staticFile(music)} loop volume={(f) => 0.55 * interpolate(f, [0, 30, durationInFrames - 60, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} /> : null}
			<Grain opacity={0.06} />
		</AbsoluteFill>
	);
};
