import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {z} from 'zod';
import {fontFamilies, useVisionFonts} from './fonts';
import {OUTRO, VISION_COLORS, VISION_TYPE} from './theme';

export const visionOutroSchema = z.object({
	/** 'transparent' pour superposer l'outro sur la dernière seconde d'un reel. */
	background: z.enum(['transparent', 'black']).optional(),
	/** Charte : centré bas ou bas droite. */
	position: z.enum(['bottom-center', 'bottom-right', 'center']).optional(),
	/** Afficher « On remplit vos tables » en Caveat or au-dessus du mot VISION. */
	showSignature: z.boolean().optional(),
});

export type VisionOutroProps = z.infer<typeof visionOutroSchema>;

/**
 * Outro VISION : 1 s (30 frames).
 * Mot VISION en Fraunces 300 italic ivoire (display : -0.06em, 0.92),
 * opacité 75 %, fondu entrant / sortant ; signature Caveat 500 or au-dessus.
 */
export const VisionOutro: React.FC<VisionOutroProps> = ({
	background = 'black',
	position = 'bottom-center',
	showSignature = true,
}) => {
	const frame = useCurrentFrame();
	const fontsReady = useVisionFonts();

	const opacity = interpolate(
		frame,
		[0, 8, OUTRO.durationInFrames - 8, OUTRO.durationInFrames],
		[0, OUTRO.opacity, OUTRO.opacity, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
	);
	const rise = interpolate(frame, [0, 10], [12, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const compact = position === 'bottom-right';
	const wordSize = compact ? 110 : 190;
	const signatureSize = compact ? 44 : 64;

	const placement: React.CSSProperties =
		position === 'center'
			? {justifyContent: 'center', alignItems: 'center'}
			: position === 'bottom-right'
				? {justifyContent: 'flex-end', alignItems: 'flex-end', padding: '0 80px 180px 0'}
				: {justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 200};

	return (
		<AbsoluteFill
			style={{
				backgroundColor:
					background === 'black' ? VISION_COLORS.black : 'transparent',
			}}
		>
			{fontsReady ? (
				<AbsoluteFill style={{display: 'flex', ...placement}}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: compact ? 'flex-end' : 'center',
							opacity,
							transform: `translateY(${rise}px)`,
						}}
					>
						{showSignature ? (
							<div
								style={{
									fontFamily: fontFamilies.caveat,
									fontWeight: VISION_TYPE.signature.fontWeight,
									fontStyle: VISION_TYPE.signature.fontStyle,
									fontSize: signatureSize,
									lineHeight: 1.2,
									color: VISION_COLORS.gold,
									marginBottom: compact ? 4 : 10,
									textShadow: '0 2px 16px rgba(5, 5, 5, 0.6)',
								}}
							>
								On remplit vos tables
							</div>
						) : null}
						<div
							style={{
								fontFamily: fontFamilies.fraunces,
								fontWeight: VISION_TYPE.display.fontWeight,
								fontStyle: VISION_TYPE.display.fontStyle,
								letterSpacing: VISION_TYPE.display.letterSpacing,
								lineHeight: VISION_TYPE.display.lineHeight,
								fontSize: wordSize,
								color: VISION_COLORS.ivory,
								// Le -0.06em italique rogne le dernier glyphe : on compense.
								paddingRight: '0.08em',
								textShadow: '0 4px 32px rgba(5, 5, 5, 0.6)',
							}}
						>
							VISION
						</div>
					</div>
				</AbsoluteFill>
			) : null}
		</AbsoluteFill>
	);
};
