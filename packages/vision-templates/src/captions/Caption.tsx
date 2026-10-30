import React, {useMemo} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {fontFamilies} from '../fonts';
import {CAPTION_STYLE, VISION_COLORS, msToFrame} from '../theme';
import type {CaptionSegment} from './schema';

type Props = {
	segment: CaptionSegment;
	animation: 'word-by-word' | 'pop';
	fontSize: number;
	maxCharsPerLine: number;
};

/** Découpe gloutonne en lignes d'au plus `maxChars` caractères. */
const wrapWords = (words: string[], maxChars: number): number[][] => {
	const lines: number[][] = [];
	let current: number[] = [];
	let length = 0;
	words.forEach((word, i) => {
		const next = length === 0 ? word.length : length + 1 + word.length;
		if (next > maxChars && current.length > 0) {
			lines.push(current);
			current = [i];
			length = word.length;
		} else {
			current.push(i);
			length = next;
		}
	});
	if (current.length > 0) {
		lines.push(current);
	}
	return lines;
};

/** Part de la durée du segment pendant laquelle les mots apparaissent. */
const WORD_REVEAL_RATIO = 0.7;
/** Fondu de sortie (frames) à la fin du segment. */
const EXIT_FRAMES = 4;

const popSpring = (frame: number, fps: number) =>
	spring({
		frame,
		fps,
		config: {damping: 14, stiffness: 260, mass: 0.6},
		durationInFrames: 12,
	});

/**
 * Un segment de sous-titre, conforme à la charte :
 * Inter Bold 64–72 px, ivoire (ou or si accent), contour 2 px #050505,
 * centré, 200 px du bas, animation mot par mot ou caption pop.
 */
export const Caption: React.FC<Props> = ({
	segment,
	animation,
	fontSize,
	maxCharsPerLine,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const startFrame = msToFrame(segment.startMs, fps);
	const endFrame = msToFrame(segment.endMs, fps);
	const local = frame - startFrame;
	const duration = Math.max(1, endFrame - startFrame);

	const words = useMemo(() => segment.text.trim().split(/\s+/), [segment.text]);
	// Les lignes sont fixées à l'avance : les mots apparaissent au centre de
	// leur ligne sans que les retours à la ligne ne sautent pendant la révélation.
	const lines = useMemo(() => wrapWords(words, maxCharsPerLine), [words, maxCharsPerLine]);

	if (local < 0 || frame >= endFrame) {
		return null;
	}

	const color = segment.accent ? VISION_COLORS.gold : VISION_COLORS.ivory;

	const exitOpacity = interpolate(
		frame,
		[endFrame - EXIT_FRAMES, endFrame],
		[1, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
	);

	// Caption pop : le segment entier surgit d'un coup.
	const segmentPop = animation === 'pop' ? popSpring(local, fps) : 1;
	const segmentScale = animation === 'pop' ? 0.85 + 0.15 * segmentPop : 1;

	// Mot par mot : chaque mot a son propre instant d'apparition.
	const revealWindow = duration * WORD_REVEAL_RATIO;
	const wordStart = (i: number) =>
		animation === 'word-by-word'
			? Math.floor((i / words.length) * revealWindow)
			: 0;

	return (
		<div
			style={{
				position: 'absolute',
				left: CAPTION_STYLE.paddingX,
				right: CAPTION_STYLE.paddingX,
				bottom: CAPTION_STYLE.paddingBottom,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-end',
				textAlign: 'center',
				opacity: exitOpacity * (animation === 'pop' ? segmentPop : 1),
				transform: `scale(${segmentScale})`,
				transformOrigin: '50% 100%',
			}}
		>
			<div
				style={{
					fontFamily: fontFamilies.inter,
					fontWeight: 700,
					fontSize,
					lineHeight: CAPTION_STYLE.lineHeight,
					color,
					// Contour 2 px visible à l'extérieur : le trait CSS est centré
					// sur le contour, on double donc l'épaisseur et on peint le
					// remplissage par-dessus (paint-order).
					WebkitTextStroke: `${CAPTION_STYLE.strokeWidth * 2}px ${VISION_COLORS.black}`,
					paintOrder: 'stroke fill',
					textShadow: '0 2px 18px rgba(5, 5, 5, 0.55)',
					maxWidth: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{lines.map((line, li) => (
					<div
						key={li}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							columnGap: '0.28em',
						}}
					>
						{line.map((i) => {
							const wLocal = local - wordStart(i);
							if (animation === 'word-by-word' && wLocal < 0) {
								// Pas encore révélé : n'occupe pas de place, la ligne
								// reste centrée sur les mots déjà visibles.
								return null;
							}
							const visible = animation === 'pop' ? 1 : popSpring(wLocal, fps);
							const scale = animation === 'pop' ? 1 : 0.6 + 0.4 * visible;
							return (
								<span
									key={`${i}-${words[i]}`}
									style={{
										display: 'inline-block',
										opacity: visible,
										transform: `scale(${scale}) translateY(${(1 - visible) * 0.2}em)`,
										transformOrigin: '50% 80%',
									}}
								>
									{words[i]}
								</span>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};
