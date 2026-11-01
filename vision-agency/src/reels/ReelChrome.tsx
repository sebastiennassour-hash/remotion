import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {ease} from '../components/anim';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {MONO} from '../fonts';

export const REEL_MARGIN = 64;
export const CREAM = '#F2ECE2';
export const ACCENT = '#E2532D';

export const ReelChrome: React.FC<{
	kicker?: string;
	label: string;
	labelBottom?: number;
	children: React.ReactNode;
}> = ({kicker, label, labelBottom = 240, children}) => {
	const frame = useCurrentFrame();
	const o = ease(frame, 4, 18, 0, 1);
	return (
		<AbsoluteFill style={{background: '#000', overflow: 'hidden'}}>
			{children}
			<div
				style={{
					position: 'absolute',
					top: 150,
					left: REEL_MARGIN,
					right: REEL_MARGIN,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					opacity: o,
				}}
			>
				<Wordmark color={CREAM} size={22} />
				{kicker ? (
					<div
						style={{
							fontFamily: MONO,
							fontSize: 19,
							fontWeight: 500,
							letterSpacing: '0.14em',
							textTransform: 'uppercase',
							color: 'rgba(242,236,226,0.75)',
							textAlign: 'right',
							maxWidth: 620,
						}}
					>
						{kicker}
					</div>
				) : null}
			</div>
			<div
				style={{
					position: 'absolute',
					bottom: labelBottom,
					left: REEL_MARGIN,
					fontFamily: MONO,
					fontSize: 18,
					letterSpacing: '0.16em',
					textTransform: 'uppercase',
					color: 'rgba(242,236,226,0.6)',
					opacity: o,
				}}
			>
				{label} · Agence vidéo · Restaurants · Suisse
			</div>
			<Grain opacity={0.07} />
		</AbsoluteFill>
	);
};
