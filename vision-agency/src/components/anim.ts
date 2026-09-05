import {Easing, interpolate, spring} from 'remotion';

export const ease = (
	frame: number,
	start: number,
	duration: number,
	from: number,
	to: number,
) =>
	interpolate(frame, [start, start + duration], [from, to], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.16, 1, 0.3, 1),
	});

export const smooth = (frame: number, fps: number, delay: number) =>
	spring({
		frame: frame - delay,
		fps,
		config: {damping: 200, stiffness: 110, mass: 0.9},
	});
