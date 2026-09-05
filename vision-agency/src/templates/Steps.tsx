import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {ease, smooth} from '../components/anim';
import {Glow} from '../components/Glow';
import {Headline} from '../components/Headline';
import {Reveal} from '../components/Reveal';
import {MONO, SANS, SERIF} from '../fonts';
import type {StepsPost} from '../posts';
import {MARGIN, type Palette} from '../theme';

export const Steps: React.FC<{post: StepsPost; palette: Palette}> = ({
	post,
	palette,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const startSteps = 44;
	const gap = 22;
	const progress = ease(frame, startSteps, gap * 3 + 10, 0, 1);

	return (
		<AbsoluteFill>
			<Glow color={palette.glow} size={800} />
			<div
				style={{
					position: 'absolute',
					left: MARGIN,
					right: MARGIN,
					top: 190,
				}}
			>
				<Headline
					text={post.headline}
					size={112}
					color={palette.fg}
					accent={palette.accent}
					delay={8}
				/>
			</div>

			<div
				style={{
					position: 'absolute',
					left: MARGIN,
					right: MARGIN,
					top: 520,
					bottom: 190,
					display: 'flex',
				}}
			>
				{/* Ligne de progression */}
				<div style={{width: 2, background: palette.rule, position: 'relative'}}>
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: 2,
							height: `${progress * 100}%`,
							background: palette.accent,
						}}
					/>
				</div>

				<div
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						paddingLeft: 44,
					}}
				>
					{post.steps.map((s, i) => {
						const d = startSteps + i * gap;
						const sp = smooth(frame, fps, d);
						return (
							<div key={s.title} style={{display: 'flex', gap: 36, alignItems: 'flex-start'}}>
								<div
									style={{
										fontFamily: MONO,
										fontSize: 22,
										fontWeight: 500,
										letterSpacing: '0.14em',
										color: palette.accent,
										paddingTop: 22,
										width: 60,
										opacity: sp,
									}}
								>
									{String(i + 1).padStart(2, '0')}
								</div>
								<div style={{flex: 1}}>
									<Headline
										text={s.title}
										size={82}
										color={palette.fg}
										accent={palette.accent}
										delay={d}
										lineHeight={1.05}
									/>
									<Reveal delay={d + 10}>
										<div
											style={{
												marginTop: 12,
												fontFamily: SANS,
												fontSize: 28,
												lineHeight: 1.35,
												color: palette.muted,
												maxWidth: 720,
											}}
										>
											{s.text}
										</div>
									</Reveal>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</AbsoluteFill>
	);
};
