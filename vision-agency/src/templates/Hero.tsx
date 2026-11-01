import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {ease} from '../components/anim';
import {Glow} from '../components/Glow';
import {Headline} from '../components/Headline';
import {Reveal} from '../components/Reveal';
import {Rule} from '../components/Rule';
import {MONO, SANS, SERIF} from '../fonts';
import type {HeroPost} from '../posts';
import {MARGIN, type Palette} from '../theme';

export const Hero: React.FC<{
	post: HeroPost;
	palette: Palette;
	index: number;
}> = ({post, palette, index}) => {
	const frame = useCurrentFrame();
	const lines = post.headline.split('\n').length;
	const size = post.size ?? (lines >= 4 ? 124 : 138);
	const ghost = ease(frame, 0, 60, 0, 1);

	return (
		<AbsoluteFill>
			<Glow color={palette.glow} />

			{/* Numéro fantôme */}
			<div
				style={{
					position: 'absolute',
					right: MARGIN - 18,
					top: 120,
					fontFamily: SERIF,
					fontStyle: 'italic',
					fontSize: 560,
					lineHeight: 1,
					color: palette.fg,
					opacity: 0.045 * ghost,
					letterSpacing: '-0.06em',
					transform: `translateY(${(1 - ghost) * 40}px)`,
				}}
			>
				{String(index).padStart(2, '0')}
			</div>

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
					paddingTop: 40,
				}}
			>
				<Headline
					text={post.headline}
					size={size}
					color={palette.fg}
					accent={palette.accent}
					delay={10}
				/>

				<div style={{height: 54}} />
				<Rule color={palette.accent} delay={34} width={96} />
				<div style={{height: 34}} />

				<Reveal delay={40}>
					<div
						style={{
							fontFamily: SANS,
							fontWeight: 400,
							fontSize: 34,
							lineHeight: 1.3,
							color: palette.muted,
							maxWidth: 780,
							letterSpacing: '-0.01em',
						}}
					>
						{post.sub}
					</div>
				</Reveal>

				{post.cta ? (
					<Reveal delay={62}>
						<div
							style={{
								marginTop: 58,
								display: 'inline-flex',
								alignItems: 'center',
								gap: 18,
								alignSelf: 'flex-start',
								padding: '18px 28px',
								border: `1.5px solid ${palette.fg}`,
								borderRadius: 999,
								fontFamily: MONO,
								fontWeight: 500,
								fontSize: 20,
								letterSpacing: '0.14em',
								textTransform: 'uppercase',
								color: palette.fg,
							}}
						>
							{post.cta}
							<span style={{fontFamily: SANS, fontSize: 24}}>→</span>
						</div>
					</Reveal>
				) : null}
			</div>
		</AbsoluteFill>
	);
};
