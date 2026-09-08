// Brand film Vision v3 « Ce soir, on mange » — structure du reel Bocca Bocca : plans courts, étalonnage cinéma, titres pleins cadre.
import type {Edl} from '../galata/edl';

const V = (n: number) => `vclips/${String(n).padStart(2, '0')}.mp4`;
const A = (n: number) => `asmr/${String(n).padStart(2, '0')}.mp4`;

export const visionFilm3: Edl = {
	bpm: 96,
	music: '03.m4a',
	musicOffset: 0,
	kicker: 'Vision — Restaurants · Suisse romande',
	signature: true,
	grade: true,
	shots: [
		{src: V(3), from: 0.2, beats: 2, text: 'CE SOIR,', textStyle: 'big', textSize: 210, flash: true},
		{src: V(23), from: 0.4, beats: 2, text: 'ON MANGE', textStyle: 'big', textSize: 210},
		{src: V(19), from: 0.3, beats: 2, text: 'CHEZ VOUS.', textStyle: 'big', textSize: 190},
		{src: V(37), from: 0.2, beats: 1, flash: true},
		{src: A(2), from: 0.5, beats: 1},
		{src: V(27), from: 0.4, beats: 1},
		{src: V(17), from: 1.0, beats: 1, flash: true},
		{src: A(4), from: 0.6, beats: 1},
		{src: V(12), from: 0.8, beats: 2, speed: 0.8},
		{src: V(7), from: 0.3, beats: 1},
		{src: V(10), from: 0.4, beats: 2, text: 'On ne vend pas\ndes vidéos.', textStyle: 'serif'},
		{src: V(13), from: 0.2, beats: 2, text: 'On revient.\n*Chaque semaine.*', textStyle: 'serif', flash: true},
		{src: V(1), from: 0.6, beats: 1},
		{src: V(39), from: 0.3, beats: 2, text: '×3 CLIENTS.', textStyle: 'big', textSize: 190, flash: true},
		{src: V(3), from: 2.4, beats: 3, text: '×3 CHIFFRE\nD’AFFAIRES.', textStyle: 'big', textSize: 150},
		{src: V(17), from: 2.2, beats: 2, speed: 0.7, text: 'En moins de *90 jours.*', textStyle: 'serif'},
	],
	endCard: {
		title: 'VISION',
		sub: 'On accompagne les restaurants, sur la durée, jusqu’à ce qu’ils deviennent des références.',
		lines: ['Un restaurant par cuisine, par ville', 'Suisse romande'],
		cta: 'Votre place est-elle libre ? · Message privé',
		beats: 5,
	},
};
