import React from 'react';
import {AbsoluteFill, OffthreadVideo, staticFile} from 'remotion';
import {useVisionFonts} from '../fonts';
import {CAPTION_STYLE, HOOK_DURATION_MS, VISION_COLORS} from '../theme';
import {Caption} from './Caption';
import {Hook} from './Hook';
import type {VisionCaptionsProps} from './schema';

const resolveSrc = (src: string): string =>
	/^https?:\/\//.test(src) || src.startsWith('data:') || src.startsWith('blob:')
		? src
		: staticFile(src);

/**
 * Sous-titres VISION sur une vidéo client.
 *
 * - vidéo source (public/ ou URL) ou fond #080808 si absente ;
 * - sous-titres mot par mot / caption pop, Inter Bold, ivoire ou or, contour
 *   2 px noir, centrés à 200 px du bas ;
 * - hook optionnel en Fraunces sur les 3 premières secondes.
 */
export const VisionCaptions: React.FC<VisionCaptionsProps> = ({
	segments,
	videoSrc,
	hook,
	animation = 'word-by-word',
	fontSize = CAPTION_STYLE.fontSize,
	maxCharsPerLine = CAPTION_STYLE.maxCharsPerLine,
	legibilityGradient = true,
	fallbackBackground = 'charcoal',
}) => {
	const fontsReady = useVisionFonts();

	const backgroundColor = videoSrc
		? VISION_COLORS.black
		: fallbackBackground === 'transparent'
			? 'transparent'
			: VISION_COLORS.charcoal;

	return (
		<AbsoluteFill style={{backgroundColor}}>
			{videoSrc ? (
				<OffthreadVideo
					src={resolveSrc(videoSrc)}
					style={{width: '100%', height: '100%', objectFit: 'cover'}}
				/>
			) : null}

			{legibilityGradient ? (
				<AbsoluteFill
					style={{
						background: `linear-gradient(to top, rgba(5,5,5,0.78) 0%, rgba(5,5,5,0.35) 22%, rgba(5,5,5,0) 42%)`,
					}}
				/>
			) : null}

			{fontsReady ? (
				<AbsoluteFill>
					{hook ? (
						<Hook
							text={hook.text}
							durationMs={hook.durationMs ?? HOOK_DURATION_MS}
						/>
					) : null}
					{segments.map((segment, i) => (
						<Caption
							key={`${i}-${segment.startMs}`}
							segment={segment}
							animation={animation}
							fontSize={fontSize}
							maxCharsPerLine={maxCharsPerLine}
						/>
					))}
				</AbsoluteFill>
			) : null}
		</AbsoluteFill>
	);
};
