import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {ease} from '../components/anim';
import {Headline} from '../components/Headline';
import {Reveal} from '../components/Reveal';
import {Rule} from '../components/Rule';
import {SANS, SERIF} from '../fonts';
import type {TickerPost} from '../posts';
import {MARGIN, WIDTH, type Palette} from '../theme';

const Row: React.FC<{
	items: string[];
	speed: number;
	palette: Palette;
	offset: number;
	italic?: boolean;
}> = ({items, speed, palette, offset, italic}) => {
	const frame = useCurrentFrame();
	const text = items.map((c) => `${c}  ·  `).join('');
	const x = ((frame * speed + offset) % 3000);
	return (
		<div
			style={{
				whiteSpace: 'nowrap',
				fontFamily: SERIF,
				fontStyle: italic ? 'italic' : 'normal',
				fontSize: 150,
				lineHeight: 1,
				letterSpacing: '-0.03em',
				color: palette.fg,
				opacity: 0.16,
				transform: `translateX(${speed > 0 ? -x : x - 3000}px)`,
			}}
		>
			{text}
			{text}
			{text}
		</div>
	);
};

export const Ticker: React.FC<{post: TickerPost; palette: Palette}> = ({
	post,
	palette,
}) => {
	const frame = useCurrentFrame();
	const fade = ease(frame, 0, 40, 0, 1);
	const c = post.cities;

	return (
		<AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: 22,
					opacity: fade,
				}}
			>
				<Row items={c} speed={2.2} offset={200} palette={palette} />
				<Row items={[...c].reverse()} speed={-1.6} offset={900} palette={palette} italic />
				<Row items={c.slice(4).concat(c.slice(0, 4))} speed={2.8} offset={1400} palette={palette} />
				<Row items={[...c].reverse().slice(2).concat(c.slice(0, 2))} speed={-2.0} offset={300} palette={palette} italic />
				<Row items={c} speed={1.8} offset={2200} palette={palette} />
			</div>

			{/* Carte centrale */}
			<div
				style={{
					position: 'absolute',
					left: MARGIN,
					right: MARGIN,
					top: '50%',
					transform: 'translateY(-50%)',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Reveal delay={14} distance={40}>
					<div
						style={{
							background: palette.bg,
							padding: '64px 72px 60px',
							border: `1.5px solid ${palette.rule}`,
							boxShadow: '0 40px 120px rgba(0,0,0,0.45)',
							width: WIDTH - MARGIN * 2,
						}}
					>
						<Headline
							text={post.headline}
							size={128}
							color={palette.fg}
							accent={palette.accent}
							delay={22}
						/>
						<div style={{height: 40}} />
						<Rule color={palette.accent} delay={44} width={96} />
						<div style={{height: 30}} />
						<Reveal delay={50}>
							<div
								style={{
									fontFamily: SANS,
									fontSize: 32,
									lineHeight: 1.3,
									color: palette.muted,
								}}
							>
								{post.sub}
							</div>
						</Reveal>
					</div>
				</Reveal>
			</div>
		</AbsoluteFill>
	);
};
