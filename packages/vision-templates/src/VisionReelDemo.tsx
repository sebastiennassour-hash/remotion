import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {VisionCaptions} from './captions/VisionCaptions';
import type {VisionCaptionsProps} from './captions/schema';
import demoCaptions from './demo-captions.json';
import {OUTRO, VISION_COLORS} from './theme';
import {VisionOutro} from './VisionOutro';

export const DEMO_DURATION_IN_FRAMES = 20 * 30; // 20 s @ 30 fps

/**
 * Fond de remplacement quand il n'y a pas de vidéo client : dégradé
 * monochrome noir (#0F0F0F → #050505) avec un très lent zoom, pour rester
 * dans l'esprit « cinématographique sombre » sans couleur vive.
 */
const DemoBackdrop: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const scale = interpolate(frame, [0, durationInFrames], [1, 1.08]);
	return (
		<AbsoluteFill
			style={{
				background: `radial-gradient(ellipse at 50% 42%, ${VISION_COLORS.coal} 0%, ${VISION_COLORS.charcoal} 45%, ${VISION_COLORS.black} 100%)`,
				transform: `scale(${scale})`,
			}}
		/>
	);
};

/**
 * Reel de vérification de 20 s :
 * [0–3 s] hook Fraunces · [3–11 s] produit · [11–16 s] preuve · [16–19 s] CTA
 * · [19–20 s] outro VISION.
 */
export const VisionReelDemo: React.FC = () => {
	const captionsDuration = DEMO_DURATION_IN_FRAMES - OUTRO.durationInFrames;
	const props = demoCaptions as VisionCaptionsProps;

	return (
		<AbsoluteFill style={{backgroundColor: VISION_COLORS.charcoal}}>
			<DemoBackdrop />
			<Sequence durationInFrames={captionsDuration} layout="none">
				<VisionCaptions {...props} videoSrc={null} fallbackBackground="transparent" />
			</Sequence>
			<Sequence
				from={captionsDuration}
				durationInFrames={OUTRO.durationInFrames}
				layout="none"
			>
				<VisionOutro background="transparent" position="bottom-center" showSignature />
			</Sequence>
		</AbsoluteFill>
	);
};
