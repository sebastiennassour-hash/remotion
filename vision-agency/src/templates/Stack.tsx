import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {smooth} from '../components/anim';
import {Glow} from '../components/Glow';
import {Headline} from '../components/Headline';
import {Reveal} from '../components/Reveal';
import {MONO, SANS} from '../fonts';
import type {StackPost} from '../posts';
import {MARGIN, type Palette} from '../theme';

export const Stack: React.FC<{post: StackPost; palette: Palette}> = ({
	post,
	palette,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const step = 16;

	return (
		<AbsoluteFill>
			<Glow color={palette.glow} />
			<div
				style={{
					position: 'absolute',
					left: MARGIN,
					right: MARGIN,
					top: 200,
					bottom: 200,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				{post.words.map((w, i) => {
					const d = 10 + i * step;
					const s = smooth(frame, fps, d);
					return (
						<div key={w}>
							<div
								style={{
									display: 'flex',
									alignItems: 'baseline',
									justifyContent: 'space-between',
									padding: '18px 0 14px',
								}}
							>
								<Headline
									text={w}
									size={150}
									color={palette.fg}
									accent={palette.accent}
									delay={d}
									lineHeight={1}
								/>
								<div
									style={{
										fontFamily: MONO,
										fontSize: 20,
										letterSpacing: '0.14em',
										color: palette.muted,
										opacity: s,
									}}
								>
									{String(i + 1).padStart(2, '0')}
								</div>
							</div>
							<div
								style={{
									height: 1.5,
									background: palette.rule,
									transform: `scaleX(${s})`,
									transformOrigin: 'left',
								}}
							/>
						</div>
					);
				})}

				<Reveal delay={10 + post.words.length * step + 8}>
					<div
						style={{
							marginTop: 48,
							fontFamily: SANS,
							fontSize: 34,
							lineHeight: 1.3,
							color: palette.muted,
							letterSpacing: '-0.01em',
						}}
					>
						{post.sub}
					</div>
				</Reveal>
			</div>
		</AbsoluteFill>
	);
};
