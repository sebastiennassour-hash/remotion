import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';

export const Glow: React.FC<{color: string; size?: number}> = ({
	color,
	size = 900,
}) => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();
	const t = frame / 90;
	const x = width * 0.72 + Math.sin(t) * 90;
	const y = height * 0.28 + Math.cos(t * 0.8) * 70;
	return (
		<div
			style={{
				position: 'absolute',
				left: x - size / 2,
				top: y - size / 2,
				width: size,
				height: size,
				borderRadius: '50%',
				background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 62%)`,
				filter: 'blur(60px)',
				opacity: 0.9,
				pointerEvents: 'none',
			}}
		/>
	);
};
