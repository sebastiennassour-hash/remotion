import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {Headline} from '../components/Headline';
import {Reveal} from '../components/Reveal';
import {Rule} from '../components/Rule';
import {DISPLAY, MONO, SANS, SERIF} from '../fonts';
import {Footage, Grade} from './Footage';
import {ACCENT, CREAM, REEL_MARGIN, ReelChrome} from './ReelChrome';
import {CLIP_FRAMES, reels} from './reels';

export type ReelProps = {index: number};

const Sub: React.FC<{text?: string; delay: number; size?: number}> = ({
	text,
	delay,
	size = 34,
}) =>
	text ? (
		<Reveal delay={delay}>
			<div
				style={{
					fontFamily: SANS,
					fontSize: size,
					lineHeight: 1.3,
					color: 'rgba(242,236,226,0.85)',
					maxWidth: 820,
					letterSpacing: '-0.01em',
				}}
			>
				{text}
			</div>
		</Reveal>
	) : null;

const Cta: React.FC<{text?: string; delay: number}> = ({text, delay}) =>
	text ? (
		<Reveal delay={delay}>
			<div
				style={{
					marginTop: 40,
					display: 'inline-flex',
					alignItems: 'center',
					gap: 16,
					padding: '18px 28px',
					background: ACCENT,
					color: '#0B0B0C',
					borderRadius: 999,
					fontFamily: MONO,
					fontWeight: 600,
					fontSize: 20,
					letterSpacing: '0.12em',
					textTransform: 'uppercase',
				}}
			>
				{text} →
			</div>
		</Reveal>
	) : null;

// Plein cadre : footage + typo bold condensée, façon affiche.
const FullBleed: React.FC<{index: number}> = ({index}) => {
	const reel = reels[index - 1];
	const lines = reel.headline.split('\n').length;
	const size = lines >= 5 ? 168 : lines === 4 ? 190 : 214;
	const stagger = reel.template === 'stack' ? Math.floor((reel.shots.length * CLIP_FRAMES - 70) / lines) : 4;
	const subDelay = reel.template === 'stack' ? reel.shots.length * CLIP_FRAMES - 60 : 16 + lines * 6;

	return (
		<ReelChrome kicker={reel.kicker} label={reel.label}>
			<Footage shots={reel.shots} />
			<Grade />
			<div
				style={{
					position: 'absolute',
					left: REEL_MARGIN,
					right: REEL_MARGIN,
					bottom: 340,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
				}}
			>
				<Headline
					text={reel.headline}
					size={size}
					color={CREAM}
					accent={ACCENT}
					delay={10}
					stagger={reel.template === 'stack' ? 0 : 3}
					lineStagger={reel.template === 'stack' ? stagger : 0}
					lineHeight={0.9}
					fontFamily={DISPLAY}
					letterSpacing="0.005em"
					style={{textShadow: '0 12px 60px rgba(0,0,0,0.55)'}}
				/>
				<div style={{height: 34}} />
				<Rule color={ACCENT} delay={subDelay - 6} width={110} />
				<div style={{height: 26}} />
				<Sub text={reel.sub} delay={subDelay} />
				<Cta text={reel.cta} delay={subDelay + 18} />
			</div>
		</ReelChrome>
	);
};

// Letterbox : fenêtre carrée sur fond noir, titre serif en bas, façon film.
const Letterbox: React.FC<{index: number}> = ({index}) => {
	const reel = reels[index - 1];
	const frame = useCurrentFrame();
	const top = 300;
	const height = 940;
	return (
		<ReelChrome kicker={reel.kicker} label={reel.label} labelBottom={96}>
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top,
					height,
					overflow: 'hidden',
				}}
			>
				<Footage shots={reel.shots} />
				<Grade strength={0.35} />
			</div>
			{/* Repères de cadre */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: top - 2,
					height: 2,
					background: 'rgba(242,236,226,0.25)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: REEL_MARGIN,
					right: REEL_MARGIN,
					top: top + height + 56,
				}}
			>
				<Headline
					text={reel.headline}
					size={104}
					color={CREAM}
					accent={ACCENT}
					delay={14}
					lineHeight={0.98}
				/>
				<div style={{height: 26}} />
				<Sub text={reel.sub} delay={54} size={28} />
			</div>
			<div
				style={{
					position: 'absolute',
					right: REEL_MARGIN,
					top: top - 44,
					fontFamily: MONO,
					fontSize: 17,
					letterSpacing: '0.16em',
					color: 'rgba(242,236,226,0.5)',
					opacity: frame > 6 ? 1 : 0,
				}}
			>
				{String(index).padStart(2, '0')} / {String(reels.length).padStart(2, '0')}
			</div>
		</ReelChrome>
	);
};

export const Reel: React.FC<ReelProps> = ({index}) => {
	const reel = reels[index - 1];
	if (reel.template === 'letterbox') return <Letterbox index={index} />;
	return <FullBleed index={index} />;
};

export const reelDuration = (index: number) =>
	reels[index - 1].shots.length * CLIP_FRAMES;
