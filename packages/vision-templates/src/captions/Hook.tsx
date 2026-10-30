import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {fontFamilies} from '../fonts';
import {VISION_COLORS, VISION_TYPE, msToFrame} from '../theme';

type Props = {
	text: string;
	durationMs: number;
};

/**
 * Accroche des 3 premières secondes : Fraunces (H1 : 400, -0.03em, 1.05),
 * ivoire, centrée dans le tiers supérieur, avec le séparateur ottoman
 * « ligne + losange central » en or 30 %.
 */
export const Hook: React.FC<Props> = ({text, durationMs}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const total = msToFrame(durationMs, fps);

	if (frame >= total) {
		return null;
	}

	const enter = interpolate(frame, [0, 12], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const exit = interpolate(frame, [total - 8, total], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity = enter * exit;
	const translateY = (1 - enter) * 24;

	return (
		<div
			style={{
				position: 'absolute',
				left: 90,
				right: 90,
				top: 0,
				height: '46%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-end',
				textAlign: 'center',
				opacity,
				transform: `translateY(${translateY}px)`,
			}}
		>
			<div
				style={{
					fontFamily: fontFamilies.fraunces,
					fontWeight: VISION_TYPE.h1.fontWeight,
					fontStyle: VISION_TYPE.h1.fontStyle,
					letterSpacing: VISION_TYPE.h1.letterSpacing,
					lineHeight: VISION_TYPE.h1.lineHeight,
					fontSize: 96,
					color: VISION_COLORS.ivory,
					textShadow: '0 4px 40px rgba(5, 5, 5, 0.7)',
					textWrap: 'balance',
				} as React.CSSProperties}
			>
				{text}
			</div>
			<Ornament />
		</div>
	);
};

/** Séparateur ottoman : ligne de 60 px avec losange central, or à 30 %. */
const Ornament: React.FC = () => (
	<svg
		width={60}
		height={10}
		viewBox="0 0 60 10"
		style={{marginTop: 40, opacity: 0.3}}
	>
		<line x1="0" y1="5" x2="24" y2="5" stroke={VISION_COLORS.gold} strokeWidth="1.5" />
		<rect
			x="26"
			y="1"
			width="8"
			height="8"
			transform="rotate(45 30 5)"
			fill="none"
			stroke={VISION_COLORS.gold}
			strokeWidth="1.5"
		/>
		<line x1="36" y1="5" x2="60" y2="5" stroke={VISION_COLORS.gold} strokeWidth="1.5" />
	</svg>
);
