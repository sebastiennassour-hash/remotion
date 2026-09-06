import React from 'react';
import {
	AbsoluteFill,
	Audio,
	OffthreadVideo,
	Sequence,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ease} from '../components/anim';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {Headline} from '../components/Headline';
import {DISPLAY, FRAUNCES, MONO, SANS} from '../fonts';
import {galataEdl, type Edl, type Shot} from './edl';

const GOLD = '#C9A84C';
const IVORY = '#F3EBDD';
const INK = '#080808';
const M = 64;
const WHOOSH = 'https://remotion.media/whoosh.wav';

export const beatFrames = (edl: Edl, fps: number) => (60 / edl.bpm) * fps;

export const brandFilmDuration = (edl: Edl, fps: number) => {
	const b = beatFrames(edl, fps);
	const shots = edl.shots.reduce((acc, s) => acc + s.beats, 0);
	return Math.round((shots + edl.endCard.beats) * b);
};

const ShotView: React.FC<{shot: Shot; len: number; accent: string}> = ({shot, len, accent}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scale = interpolate(frame, [0, len], [1.0, 1.07]);
	const flash = shot.flash ? interpolate(frame, [0, 3, 8], [0.9, 0.6, 0], {extrapolateRight: 'clamp'}) : 0;
	const punch = spring({frame, fps, config: {damping: 14, stiffness: 160, mass: 0.7}});

	return (
		<AbsoluteFill>
			<OffthreadVideo
				src={staticFile(shot.src)}
				startFrom={Math.round(shot.from * fps)}
				playbackRate={shot.speed ?? 1}
				muted
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: `50% ${shot.focusY ?? 50}%`,
					transform: `scale(${scale})`,
				}}
			/>
			{/* Voile haut/bas pour la lisibilité */}
			<AbsoluteFill
				style={{
					background:
						'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)',
				}}
			/>

			{shot.text && shot.textStyle === 'big' ? (
				<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
					<div
						style={{
							fontFamily: DISPLAY,
							fontSize: shot.textSize ?? 210,
							lineHeight: 0.9,
							color: IVORY,
							textAlign: 'center',
							letterSpacing: '-0.01em',
							textShadow: '0 12px 60px rgba(0,0,0,0.45)',
							transform: `scale(${1.18 - 0.18 * punch})`,
							opacity: punch,
							padding: `0 ${M}px`,
							whiteSpace: 'pre-line',
						}}
					>
						{shot.text}
					</div>
				</AbsoluteFill>
			) : null}

			{shot.text && shot.textStyle === 'serif' ? (
				<div style={{position: 'absolute', left: M, right: M, bottom: 420}}>
					<Headline
						text={shot.text}
						size={88}
						color={IVORY}
						accent={accent}
						fontFamily={FRAUNCES}
						letterSpacing="-0.02em"
						delay={2}
						stagger={2}
						lineHeight={1.02}
					/>
				</div>
			) : null}

			{shot.text && shot.textStyle === 'kicker' ? (
				<div
					style={{
						position: 'absolute',
						left: M,
						bottom: 420,
						fontFamily: MONO,
						fontSize: 22,
						letterSpacing: '0.18em',
						textTransform: 'uppercase',
						color: accent,
						opacity: punch,
					}}
				>
					{shot.text}
				</div>
			) : null}

			{shot.flash ? (
				<AbsoluteFill style={{background: IVORY, opacity: flash, pointerEvents: 'none'}} />
			) : null}
			{shot.flash ? <Audio src={WHOOSH} volume={0.35} /> : null}
		</AbsoluteFill>
	);
};

const EndCard: React.FC<{edl: Edl}> = ({edl}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = spring({frame, fps, config: {damping: 200, stiffness: 90}});
	const tracking = interpolate(s, [0, 1], [0.35, 0.06]);
	const c = edl.endCard;
	const accent = edl.accent ?? GOLD;
	return (
		<AbsoluteFill style={{background: INK, justifyContent: 'center', alignItems: 'center'}}>
			<div
				style={{
					fontFamily: FRAUNCES,
					fontWeight: 700,
					fontSize: 230,
					lineHeight: 0.9,
					color: accent,
					letterSpacing: `${tracking}em`,
					opacity: s,
					marginLeft: `${tracking}em`,
				}}
			>
				{c.title}
			</div>
			<div style={{height: 28}} />
			<div
				style={{
					fontFamily: FRAUNCES,
					fontStyle: 'italic',
					fontWeight: 400,
					fontSize: 42,
					color: IVORY,
					opacity: ease(frame, 14, 20, 0, 1),
				}}
			>
				{c.sub}
			</div>
			<div style={{height: 64}} />
			<div style={{display: 'flex', gap: 28, alignItems: 'center'}}>
				{c.lines.map((l, i) => (
					<React.Fragment key={l}>
						{i > 0 ? <div style={{width: 6, height: 6, background: accent, transform: 'rotate(45deg)', opacity: ease(frame, 24 + i * 6, 14, 0, 1)}} /> : null}
						<div
							style={{
								fontFamily: SANS,
								fontWeight: 500,
								fontSize: 28,
								letterSpacing: '0.02em',
								color: 'rgba(243,235,221,0.8)',
								opacity: ease(frame, 24 + i * 6, 14, 0, 1),
							}}
						>
							{l}
						</div>
					</React.Fragment>
				))}
			</div>
			<div style={{height: 90}} />
			<div
				style={{
					padding: '20px 34px',
					border: `1.5px solid ${accent}`,
					borderRadius: 999,
					fontFamily: MONO,
					fontSize: 22,
					letterSpacing: '0.16em',
					textTransform: 'uppercase',
					color: accent,
					opacity: ease(frame, 44, 18, 0, 1),
					transform: `translateY(${ease(frame, 44, 18, 20, 0)}px)`,
				}}
			>
				{c.cta}
			</div>
			{edl.signature ? (
			<div
				style={{
					position: 'absolute',
					bottom: 130,
					display: 'flex',
					alignItems: 'center',
					gap: 18,
					opacity: ease(frame, 60, 20, 0, 0.7),
				}}
			>
				<div style={{fontFamily: MONO, fontSize: 17, letterSpacing: '0.2em', color: IVORY, textTransform: 'uppercase'}}>
					un film
				</div>
				<Wordmark color={IVORY} size={18} />
			</div>
			) : null}
		</AbsoluteFill>
	);
};

export const BrandFilm: React.FC<{edl?: Edl}> = ({edl = galataEdl}) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const b = beatFrames(edl, fps);
	const accent = edl.accent ?? GOLD;
	let cursor = 0;
	const items = edl.shots.map((shot) => {
		const from = Math.round(cursor);
		const len = Math.round(shot.beats * b);
		cursor += shot.beats * b;
		return {shot, from, len};
	});
	const endFrom = Math.round(cursor);
	const chromeOpacity = ease(frame, 6, 16, 0, 1) * (frame < endFrom ? 1 : 0);
	const musicVolume = (f: number) =>
		interpolate(f, [0, 20, durationInFrames - 40, durationInFrames], [0, 1, 1, 0], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

	return (
		<AbsoluteFill style={{background: INK}}>
			{items.map(({shot, from, len}, i) => (
				<Sequence key={i} from={from} durationInFrames={len}>
					<ShotView shot={shot} len={len} accent={accent} />
				</Sequence>
			))}
			<Sequence from={endFrom} durationInFrames={durationInFrames - endFrom}>
				<EndCard edl={edl} />
			</Sequence>

			{/* Bandeau permanent */}
			<div
				style={{
					position: 'absolute',
					top: 150,
					left: M,
					right: M,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					opacity: chromeOpacity,
				}}
			>
				<div style={{fontFamily: MONO, fontSize: 19, letterSpacing: '0.16em', textTransform: 'uppercase', color: IVORY}}>
					{edl.kicker}
				</div>
				<div style={{width: 8, height: 8, background: accent, transform: 'rotate(45deg)'}} />
			</div>

			{edl.music ? (
				<Audio
					src={staticFile(`audio/${edl.music}`)}
					startFrom={Math.round(edl.musicOffset * fps)}
					volume={musicVolume}
				/>
			) : null}
			<Grain opacity={0.06} />
		</AbsoluteFill>
	);
};
