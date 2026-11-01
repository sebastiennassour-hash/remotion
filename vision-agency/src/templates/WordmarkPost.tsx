import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {ease, smooth} from '../components/anim';
import {Glow} from '../components/Glow';
import {Headline} from '../components/Headline';
import {Reveal} from '../components/Reveal';
import {SANS} from '../fonts';
import type {WordmarkPost as WordmarkContent} from '../posts';
import {MARGIN, WIDTH, type Palette} from '../theme';

const ROWS = 5;

export const WordmarkPost: React.FC<{
	post: WordmarkContent;
	palette: Palette;
}> = ({post, palette}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const tracking = ease(frame, 0, 70, 0.22, -0.035);

	return (
		<AbsoluteFill>
			<Glow color={palette.glow} size={1000} />
			<div
				style={{
					position: 'absolute',
					left: MARGIN,
					right: MARGIN,
					top: 160,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{Array.from({length: ROWS}).map((_, i) => {
					const s = smooth(frame, fps, 6 + i * 7);
					const filled = i === ROWS - 1;
					return (
						<div
							key={i}
							style={{
								fontFamily: SANS,
								fontWeight: 800,
								fontSize: 172,
								lineHeight: 0.84,
								letterSpacing: `${tracking}em`,
								color: filled ? palette.fg : 'transparent',
								WebkitTextStroke: filled ? undefined : `1.5px ${palette.fg}`,
								opacity: filled ? s : s * (0.18 + i * 0.12),
								transform: `translateY(${(1 - s) * 30}px)`,
								width: WIDTH - MARGIN * 2,
							}}
						>
							VISION
						</div>
					);
				})}
			</div>

			<div
				style={{
					position: 'absolute',
					left: MARGIN,
					right: MARGIN,
					bottom: 170,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
				}}
			>
				<Headline
					text={post.lines.join('\n')}
					size={70}
					color={palette.fg}
					accent={palette.accent}
					delay={52}
					stagger={5}
					lineHeight={1.05}
				/>
				<Reveal delay={86}>
					<div
						style={{
							fontFamily: SANS,
							fontSize: 28,
							color: palette.accent,
							textAlign: 'right',
							maxWidth: 380,
							lineHeight: 1.3,
						}}
					>
						{post.tagline}
					</div>
				</Reveal>
			</div>
		</AbsoluteFill>
	);
};
