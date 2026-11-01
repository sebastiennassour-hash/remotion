import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {ease} from '../components/anim';
import {Headline} from '../components/Headline';
import {Reveal} from '../components/Reveal';
import {MONO, SANS} from '../fonts';
import type {SplitPost} from '../posts';
import {HEIGHT, MARGIN, palettes, type Palette} from '../theme';

const Half: React.FC<{
	label: string;
	text: string;
	palette: Palette;
	delay: number;
}> = ({label, text, palette, delay}) => {
	return (
		<div
			style={{
				position: 'absolute',
				left: MARGIN,
				right: MARGIN,
				top: 0,
				bottom: 0,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: 34,
				paddingBottom: 40,
			}}
		>
			<Reveal delay={delay}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 16,
						fontFamily: MONO,
						fontSize: 21,
						letterSpacing: '0.18em',
						textTransform: 'uppercase',
						color: palette.accent,
					}}
				>
					<div
						style={{
							width: 10,
							height: 10,
							borderRadius: 999,
							background: palette.accent,
						}}
					/>
					{label}
				</div>
			</Reveal>
			<div>
				<Headline
					text={text}
					size={104}
					color={palette.fg}
					accent={palette.accent}
					delay={delay + 6}
				/>
			</div>
		</div>
	);
};

export const Split: React.FC<{post: SplitPost; palette: Palette}> = ({
	post,
	palette,
}) => {
	const frame = useCurrentFrame();
	const wipe = ease(frame, 58, 34, 0, 1);
	const dark = palettes.ink;
	const cut = HEIGHT * 0.52;

	return (
		<AbsoluteFill>
			{/* Avant */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: cut,
					background: palette.bg,
				}}
			>
				<Half
					label={post.before.label}
					text={post.before.text}
					palette={palette}
					delay={8}
				/>
			</div>

			{/* Après : balayage vers le haut */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: cut,
					bottom: 0,
					background: dark.bg,
					clipPath: `inset(${(1 - wipe) * 100}% 0 0 0)`,
				}}
			>
				<Half
					label={post.after.label}
					text={post.after.text}
					palette={dark}
					delay={74}
				/>
				<Reveal delay={112} style={{position: 'absolute', left: MARGIN, right: MARGIN, bottom: 132}}>
					<div
						style={{
							fontFamily: SANS,
							fontSize: 30,
							color: dark.muted,
							letterSpacing: '-0.01em',
						}}
					>
						{post.sub}
					</div>
				</Reveal>
			</div>

			{/* Ligne de coupe */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: cut - 1,
					height: 3,
					background: palette.accent,
					transform: `scaleX(${ease(frame, 50, 30, 0, 1)})`,
					transformOrigin: 'left',
				}}
			/>
		</AbsoluteFill>
	);
};
