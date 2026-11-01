export type PaletteName = 'ink' | 'cream' | 'accent';

export type Palette = {
	bg: string;
	fg: string;
	muted: string;
	accent: string;
	rule: string;
	glow: string;
};

export const palettes: Record<PaletteName, Palette> = {
	ink: {
		bg: '#0B0B0C',
		fg: '#F2ECE2',
		muted: 'rgba(242,236,226,0.58)',
		accent: '#E2532D',
		rule: 'rgba(242,236,226,0.18)',
		glow: 'rgba(226,83,45,0.55)',
	},
	cream: {
		bg: '#F2ECE2',
		fg: '#0B0B0C',
		muted: 'rgba(11,11,12,0.58)',
		accent: '#E2532D',
		rule: 'rgba(11,11,12,0.16)',
		glow: 'rgba(226,83,45,0.22)',
	},
	accent: {
		bg: '#E2532D',
		fg: '#F7F1E8',
		muted: 'rgba(247,241,232,0.72)',
		accent: '#0B0B0C',
		rule: 'rgba(247,241,232,0.32)',
		glow: 'rgba(255,190,120,0.45)',
	},
};

export const WIDTH = 1080;
export const HEIGHT = 1350;
export const FPS = 30;
export const DURATION = 180;
export const MARGIN = 72;
export const TOTAL_POSTS = 15;
