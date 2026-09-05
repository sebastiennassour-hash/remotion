import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {MONO, SANS} from '../fonts';
import {MARGIN, TOTAL_POSTS, type Palette} from '../theme';
import {ease} from './anim';
import {Grain} from './Grain';
import {Rule} from './Rule';

export const Wordmark: React.FC<{color: string; size?: number}> = ({
	color,
	size = 22,
}) => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			gap: size * 0.55,
			color,
			fontFamily: SANS,
			fontWeight: 700,
			fontSize: size,
			letterSpacing: '0.32em',
		}}
	>
		<div
			style={{
				width: size * 0.5,
				height: size * 0.5,
				background: color,
				borderRadius: 1,
				transform: 'rotate(45deg)',
			}}
		/>
		VISION
	</div>
);

const pad = (n: number) => String(n).padStart(2, '0');

export const Chrome: React.FC<{
	palette: Palette;
	footerPalette?: Palette;
	index: number;
	label: string;
	children: React.ReactNode;
	grain?: boolean;
}> = ({palette, footerPalette, index, label, children, grain = true}) => {
	const frame = useCurrentFrame();
	const fp = footerPalette ?? palette;
	const chromeOpacity = ease(frame, 0, 18, 0, 1);

	return (
		<AbsoluteFill style={{background: palette.bg, overflow: 'hidden'}}>
			{children}

			{/* En-tête */}
			<div
				style={{
					position: 'absolute',
					top: MARGIN - 12,
					left: MARGIN,
					right: MARGIN,
					opacity: chromeOpacity,
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingBottom: 22,
					}}
				>
					<Wordmark color={palette.fg} />
					<div
						style={{
							fontFamily: MONO,
							fontSize: 20,
							fontWeight: 500,
							letterSpacing: '0.12em',
							color: palette.muted,
						}}
					>
						{pad(index)} — {pad(TOTAL_POSTS)}
					</div>
				</div>
				<Rule color={palette.rule} delay={4} />
			</div>

			{/* Pied */}
			<div
				style={{
					position: 'absolute',
					bottom: MARGIN - 12,
					left: MARGIN,
					right: MARGIN,
					opacity: chromeOpacity,
				}}
			>
				<Rule color={fp.rule} delay={8} origin="right" />
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingTop: 22,
						fontFamily: MONO,
						fontSize: 19,
						fontWeight: 500,
						letterSpacing: '0.16em',
						textTransform: 'uppercase',
						color: fp.muted,
					}}
				>
					<div style={{color: fp.fg}}>{label}</div>
					<div>Agence vidéo · Restaurants · Suisse</div>
				</div>
			</div>

			{grain ? <Grain /> : null}
		</AbsoluteFill>
	);
};
