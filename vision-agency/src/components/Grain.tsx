import React from 'react';
import {useCurrentFrame} from 'remotion';

export const Grain: React.FC<{opacity?: number}> = ({opacity = 0.09}) => {
	const frame = useCurrentFrame();
	return (
		<svg
			style={{
				position: 'absolute',
				inset: 0,
				width: '100%',
				height: '100%',
				opacity,
				mixBlendMode: 'overlay',
				pointerEvents: 'none',
			}}
		>
			<filter id="grain">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.85"
					numOctaves="2"
					seed={frame % 24}
					stitchTiles="stitch"
				/>
				<feColorMatrix type="saturate" values="0" />
			</filter>
			<rect width="100%" height="100%" filter="url(#grain)" />
		</svg>
	);
};
