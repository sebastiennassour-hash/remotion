// Brand film Vision v2 : plans issus des photos, monté sur la musique 03 (72 bpm), mots du manifeste.
import type {Edl} from '../galata/edl';

const V = (n: number) => `vclips/${String(n).padStart(2, '0')}.mp4`;

export const visionFilm2: Edl = {
	bpm: 72,
	music: '03.m4a',
	musicOffset: 0,
	kicker: 'Vision — Restaurants · Suisse romande',
	signature: true,
	shots: [
		{src: V(10), from: 0.3, beats: 2, text: 'UN RESTAURANT', textStyle: 'big', textSize: 150, flash: true},
		{src: V(7), from: 0.4, beats: 2, text: 'ce n’est pas une carte.', textStyle: 'serif'},
		{src: V(3), from: 0.5, beats: 2, text: 'C’EST UNE HEURE.', textStyle: 'big', textSize: 140},
		{src: V(17), from: 0.3, beats: 1, text: 'UN GESTE.', textStyle: 'big', textSize: 150, flash: true},
		{src: V(12), from: 0.6, beats: 2, speed: 0.85, text: 'Une seconde\nqu’on *connaît.*', textStyle: 'serif'},
		{src: V(19), from: 0.4, beats: 2, text: 'UNE SALLE\nPLEINE.', textStyle: 'big', textSize: 150},
		{src: V(13), from: 0.3, beats: 2, text: 'On ne vend pas\ndes vidéos.', textStyle: 'serif', flash: true},
		{src: V(1), from: 0.5, beats: 2, text: 'CHAQUE SEMAINE.\nCHEZ VOUS.', textStyle: 'big', textSize: 120},
		{src: V(10), from: 2.2, beats: 1},
		{src: V(17), from: 2.0, beats: 1, flash: true},
		{src: V(3), from: 2.4, beats: 3, speed: 0.8, text: '×3 clients.\nMoins de *90 jours.*', textStyle: 'serif'},
	],
	endCard: {
		title: 'VISION',
		sub: 'On accompagne les restaurants sur la durée, jusqu’à ce qu’ils deviennent des références.',
		lines: ['Un restaurant par cuisine, par ville', 'Suisse romande'],
		cta: 'Votre place est-elle libre ? · Message privé',
		beats: 6,
	},
};
