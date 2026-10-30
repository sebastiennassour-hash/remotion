import React from 'react';
import {Composition} from 'remotion';
import {VisionCaptions} from './captions/VisionCaptions';
import {visionCaptionsSchema, type VisionCaptionsProps} from './captions/schema';
import demoCaptions from './demo-captions.json';
import {OUTRO, REEL} from './theme';
import {VisionOutro, visionOutroSchema} from './VisionOutro';
import {DEMO_DURATION_IN_FRAMES, VisionReelDemo} from './VisionReelDemo';

/** Marge après le dernier sous-titre quand `durationMs` n'est pas fourni. */
const TAIL_MS = 500;

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="VisionCaptions"
				component={VisionCaptions}
				schema={visionCaptionsSchema}
				width={REEL.width}
				height={REEL.height}
				fps={REEL.fps}
				durationInFrames={REEL.fps * 20}
				defaultProps={demoCaptions as VisionCaptionsProps}
				calculateMetadata={({props}) => {
					const lastEnd = props.segments.reduce(
						(max, s) => Math.max(max, s.endMs),
						0,
					);
					const totalMs = props.durationMs ?? lastEnd + TAIL_MS;
					return {
						durationInFrames: Math.max(
							REEL.fps,
							Math.ceil((totalMs / 1000) * REEL.fps),
						),
					};
				}}
			/>
			<Composition
				id="VisionOutro"
				component={VisionOutro}
				schema={visionOutroSchema}
				width={REEL.width}
				height={REEL.height}
				fps={REEL.fps}
				durationInFrames={OUTRO.durationInFrames}
				defaultProps={{
					background: 'black',
					position: 'bottom-center',
					showSignature: true,
				}}
			/>
			<Composition
				id="VisionReelDemo"
				component={VisionReelDemo}
				width={REEL.width}
				height={REEL.height}
				fps={REEL.fps}
				durationInFrames={DEMO_DURATION_IN_FRAMES}
			/>
		</>
	);
};
