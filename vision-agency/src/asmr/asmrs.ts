import type {AsmrProps} from './Asmr';

const A = (n: number) => `asmr/${String(n).padStart(2, '0')}.mp4`;

export const asmrs: {slug: string; props: AsmrProps}[] = [
	{
		slug: 'Service',
		props: {
			kicker: 'ASMR · Le service',
			clips: [A(1), A(2), A(3), A(4)],
			line: 'Ça, c’est ce que vos clients veulent entendre. *Chaque semaine.*',
			cta: 'Votre place est-elle libre ?',
			music: 'music/02.m4a',
		},
	},
];
