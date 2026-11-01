import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {smooth} from './anim';

export const Rule: React.FC<{
	color: string;
	delay?: number;
	width?: number | string;
	origin?: 'left' | 'right';
}> = ({color, delay = 0, width = '100%', origin = 'left'}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = smooth(frame, fps, delay);
	return (
		<div
			style={{
				width,
				height: 1.5,
				background: color,
				transform: `scaleX(${s})`,
				transformOrigin: origin,
			}}
		/>
	);
};
