import type {AsmrProps} from './Asmr';

const A = (n: number) => `asmr/${String(n).padStart(2, '0')}.mp4`;

export const asmrs: {slug: string; props: AsmrProps}[] = [
	{
		slug: 'Service',
		props: {
			kicker: 'ASMR · Le service',
			clips: ['vclips/17.mp4', A(2), 'vclips/12.mp4', A(4)],
			line: 'Ça, c’est ce que vos clients veulent entendre. *Chaque semaine.*',
			cta: 'Votre place est-elle libre ?',
			music: 'music/02.m4a',
		},
	},
];
