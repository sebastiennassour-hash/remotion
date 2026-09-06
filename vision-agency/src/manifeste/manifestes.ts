import type {ManifesteProps} from './Manifeste';

const V = (n: number) => `vclips/${String(n).padStart(2, '0')}.mp4`;

export const manifestes: {slug: string; props: ManifesteProps}[] = [
	{
		slug: 'Manifeste',
		props: {
			kicker: 'Manifeste',
			music: 'music/03.m4a',
			cta: 'Votre place est-elle libre ?',
			shots: [
				{clip: V(10), text: 'Un restaurant'},
				{clip: V(7), text: 'ce n’est pas une carte.'},
				{clip: V(3), text: 'C’est une heure.'},
				{clip: V(17), text: 'Un geste.'},
				{clip: V(12), text: 'Une seconde qu’on connaît.'},
				{clip: V(19), text: 'Une salle pleine.'},
				{clip: V(13), text: 'On ne vend pas des vidéos.'},
				{clip: V(1), text: 'On revient. Chaque semaine.'},
				{clip: V(3), text: '×3 clients. Moins de 90 jours.', gold: true},
			],
		},
	},
	{
		slug: 'Salle',
		props: {
			kicker: 'Ce qu’on construit',
			music: 'music/01.m4a',
			cta: 'Un restaurant par cuisine, par ville',
			shots: [
				{clip: V(13), text: 'On arrive avant le coup de feu.'},
				{clip: V(10), text: 'La salle est vide.'},
				{clip: V(7), text: 'On filme le vrai service.'},
				{clip: V(17), text: 'Rien n’est joué.'},
				{clip: V(12), text: 'Puis on revient. Chaque semaine.'},
				{clip: V(1), text: 'On publie, on mesure, on ajuste.'},
				{clip: V(19), text: 'Jusqu’à ce que la salle soit pleine.', gold: true},
			],
		},
	},
];
