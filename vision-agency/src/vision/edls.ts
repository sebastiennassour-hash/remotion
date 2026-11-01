// Listes de montage du compte Vision : brand film + 5 reels multi-plans.
// Plans : public/clips/01..12 (voir clips.json).
import type {Edl} from '../galata/edl';

const C = (n: number) => `clips/${String(n).padStart(2, '0')}.mp4`;
const KICKER = 'Vision — Agence vidéo · Restaurants · Suisse';

const endVision = (cta: string, beats = 5) => ({
	title: 'VISION',
	sub: 'L’agence vidéo des restaurants suisses',
	lines: ['Stratégie', 'Tournage', 'Diffusion'],
	cta,
	beats,
});

export const visionFilm: Edl = {
	bpm: 100,
	music: null,
	musicOffset: 0,
	kicker: KICKER,
	shots: [
		{src: C(2), from: 0.4, beats: 2, text: 'VISION.', textStyle: 'big', flash: true},
		{src: C(12), from: 1.2, beats: 1},
		{src: C(4), from: 1.5, beats: 1},
		{src: C(1), from: 0.6, beats: 3, text: 'Nous ne filmons\n*que* des restaurants.', textStyle: 'serif'},
		{src: C(5), from: 0.8, beats: 1, flash: true},
		{src: C(11), from: 1.0, beats: 1},
		{src: C(9), from: 0.5, beats: 2, text: 'LE GESTE.', textStyle: 'big'},
		{src: C(7), from: 0.8, beats: 2, text: 'LA TABLE.', textStyle: 'big'},
		{src: C(8), from: 0.3, beats: 2, text: 'LA SALLE.', textStyle: 'big'},
		{src: C(3), from: 0.4, beats: 4, speed: 0.75, text: 'Votre histoire\nmérite un *film.*', textStyle: 'serif'},
		{src: C(10), from: 0.5, beats: 3, text: 'Coulisses · Tournage', textStyle: 'kicker', flash: true},
		{src: C(6), from: 0.6, beats: 2, text: 'UNE MATINÉE.', textStyle: 'big', textSize: 170},
		{src: C(12), from: 2.6, beats: 2, text: 'DES MOIS\nDE CONTENU.', textStyle: 'big', textSize: 150},
		{src: C(2), from: 2.4, beats: 3, speed: 0.8, text: 'De Genève\nà *Zurich.*', textStyle: 'serif', flash: true},
	],
	endCard: endVision('Candidatures ouvertes · Lien en bio', 6),
};

export const visionReels: {slug: string; label: string; edl: Edl; caption: string}[] = [
	{
		slug: 'Exclusif',
		label: 'Exclusif',
		edl: {
			bpm: 100, music: null, musicOffset: 0, kicker: KICKER,
			shots: [
				{src: C(1), from: 0.5, beats: 2, text: 'RESTAURANTS.', textStyle: 'big', textSize: 170, flash: true},
				{src: C(5), from: 0.9, beats: 1},
				{src: C(9), from: 0.6, beats: 1},
				{src: C(3), from: 0.3, beats: 4, speed: 0.8, text: 'Nous ne filmons\n*que* des restaurants.', textStyle: 'serif'},
			],
			endCard: endVision('Lien en bio', 4),
		},
		caption: 'Nous ne filmons que des restaurants.\n\nPas de mode, pas d’immobilier, pas de tech. On connaît le coup de feu, la lumière d’une salle à 19h et la façon dont un plat doit bouger à l’écran pour donner faim.\n\nVision. Exclusivement restaurants.',
	},
	{
		slug: 'Coulisses',
		label: 'Coulisses',
		edl: {
			bpm: 100, music: null, musicOffset: 0, kicker: KICKER,
			shots: [
				{src: C(10), from: 0.2, beats: 3, text: 'Coulisses · Tournage', textStyle: 'kicker'},
				{src: C(5), from: 0.8, beats: 1, flash: true},
				{src: C(1), from: 1.0, beats: 2, text: 'UNE MATINÉE.', textStyle: 'big', textSize: 170},
				{src: C(6), from: 0.4, beats: 3, text: 'DES MOIS\nDE CONTENU.', textStyle: 'big', textSize: 150},
			],
			endCard: endVision('Lien en bio', 4),
		},
		caption: 'Une matinée de tournage. Des mois de contenu.\n\nOn arrive avant le service, on repart avant le coup de feu. Vous ne fermez pas, vous ne changez rien.\n\nEt votre feed est nourri pour des mois.',
	},
	{
		slug: 'Suisse',
		label: 'Partout en Suisse',
		edl: {
			bpm: 100, music: null, musicOffset: 0, kicker: KICKER,
			shots: [
				{src: C(2), from: 0.3, beats: 2, text: 'GENÈVE.', textStyle: 'big', flash: true},
				{src: C(8), from: 0.5, beats: 2, text: 'LAUSANNE.', textStyle: 'big', textSize: 180},
				{src: C(7), from: 0.6, beats: 2, text: 'ZURICH.', textStyle: 'big'},
				{src: C(12), from: 0.8, beats: 3, speed: 0.85, text: 'On connaît\nvos *salles.*', textStyle: 'serif'},
			],
			endCard: endVision('Lien en bio', 4),
		},
		caption: 'Genève, Lausanne, Zurich, Bâle, Lugano.\n\nOn se déplace partout en Suisse. Une brasserie de quartier, une table étoilée, un chalet d’altitude : chaque salle a une histoire à filmer.\n\nVision. Une agence suisse pour des restaurants suisses.',
	},
	{
		slug: 'Spectacle',
		label: 'Chaque service',
		edl: {
			bpm: 100, music: null, musicOffset: 0, kicker: KICKER,
			shots: [
				{src: C(4), from: 1.0, beats: 1},
				{src: C(11), from: 0.9, beats: 1, flash: true},
				{src: C(5), from: 1.2, beats: 1},
				{src: C(9), from: 0.8, beats: 1},
				{src: C(6), from: 0.5, beats: 3, text: 'Chaque service\nest un *spectacle.*', textStyle: 'serif'},
				{src: C(3), from: 1.0, beats: 2, speed: 0.8},
			],
			endCard: endVision('Lien en bio', 4),
		},
		caption: 'Chaque service est un spectacle.\n\nLe geste du chef, la flamme au bar, le vin qui tombe dans le verre. Tout ce que vos clients adorent et que personne ne filme.\n\nNous, si.',
	},
	{
		slug: 'Places',
		label: 'Candidatures',
		edl: {
			bpm: 100, music: null, musicOffset: 0, kicker: KICKER,
			shots: [
				{src: C(2), from: 0.6, beats: 2, text: 'PLACES\nLIMITÉES.', textStyle: 'big', textSize: 170, flash: true},
				{src: C(12), from: 1.4, beats: 2},
				{src: C(8), from: 0.6, beats: 4, speed: 0.8, text: 'Un nombre *limité*\nde restaurants\npar mois.', textStyle: 'serif'},
			],
			endCard: endVision('Candidatures ouvertes · Lien en bio', 5),
		},
		caption: 'Nous accompagnons un nombre limité de restaurants.\n\nPas par posture. Parce qu’un accompagnement réel demande du temps, de la présence et de l’attention.\n\nCandidatures ouvertes. Lien en bio.',
	},
];
