import React from 'react';
import {
	AbsoluteFill,
	OffthreadVideo,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {CLIP_FRAMES, type ReelShot} from './reels';

const Shot: React.FC<{clip: number; zoomFrom?: number}> = ({clip}) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, CLIP_FRAMES], [1.02, 1.09]);
	const fadeIn = interpolate(frame, [0, 6], [0, 1], {extrapolateRight: 'clamp'});
	return (
		<AbsoluteFill style={{opacity: fadeIn}}>
			<OffthreadVideo
				src={staticFile(`clips/${String(clip).padStart(2, '0')}.mp4`)}
				muted
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					transform: `scale(${scale})`,
				}}
			/>
		</AbsoluteFill>
	);
};

export const Footage: React.FC<{shots: ReelShot[]}> = ({shots}) => (
	<AbsoluteFill style={{background: '#000'}}>
		{shots.map((s, i) => (
			<Sequence key={i} from={i * CLIP_FRAMES} durationInFrames={CLIP_FRAMES}>
				<Shot clip={s.clip} />
			</Sequence>
		))}
	</AbsoluteFill>
);

// Voile de lisibilité : assombrit haut et bas, léger grain chaud.
export const Grade: React.FC<{strength?: number}> = ({strength = 1}) => (
	<>
		<AbsoluteFill
			style={{
				background: `linear-gradient(180deg, rgba(0,0,0,${0.45 * strength}) 0%, rgba(0,0,0,0) 28%, rgba(0,0,0,0) 50%, rgba(0,0,0,${0.72 * strength}) 100%)`,
			}}
		/>
		<AbsoluteFill
			style={{
				background: 'rgba(226,83,45,0.06)',
				mixBlendMode: 'overlay',
			}}
		/>
	</>
);
