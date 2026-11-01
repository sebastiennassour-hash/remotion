import React from 'react';
import {useCurrentFrame} from 'remotion';
import {ease} from './anim';

export const Reveal: React.FC<{
	delay?: number;
	duration?: number;
	distance?: number;
	children: React.ReactNode;
	style?: React.CSSProperties;
}> = ({delay = 0, duration = 24, distance = 28, children, style}) => {
	const frame = useCurrentFrame();
	const o = ease(frame, delay, duration, 0, 1);
	const y = ease(frame, delay, duration, distance, 0);
	return (
		<div style={{opacity: o, transform: `translateY(${y}px)`, ...style}}>
			{children}
		</div>
	);
};
