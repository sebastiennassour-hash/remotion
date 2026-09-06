// Liste de montage (EDL) du brand film Galata. Les durées sont en temps (beats)
// pour que chaque coupe tombe sur la musique.
export type Shot = {
	/** Fichier dans public/rushes/ */
	src: string;
	/** Point d'entrée dans le rush, en secondes */
	from: number;
	/** Durée du plan en temps musicaux */
	beats: number;
	/** Vitesse de lecture (1 = normale, 0.5 = ralenti) */
	speed?: number;
	/** Texte affiché pendant le plan */
	text?: string;
	textStyle?: 'big' | 'serif' | 'kicker';
	/** Flash blanc + whoosh à la coupe */
	flash?: boolean;
	/** Cadrage : recadrage vertical en % (50 = centre) */
	focusY?: number;
};

export type Edl = {
	bpm: number;
	/** Fichier musique dans public/audio/, ou null */
	music: string | null;
	musicOffset: number;
	shots: Shot[];
	endCard: {
		title: string;
		sub: string;
		lines: string[];
		cta: string;
		beats: number;
	};
	kicker: string;
};

// EDL provisoire : à remplacer par la sélection sur les vrais rushs Galata.
export const galataEdl: Edl = {
	bpm: 96,
	music: null,
	musicOffset: 0,
	kicker: 'Galata — Café-restaurant · Fribourg',
	shots: [
		{src: '01.mp4', from: 0, beats: 2, text: 'FRIBOURG.', textStyle: 'big', flash: true},
		{src: '02.mp4', from: 0, beats: 2, text: 'UN SOIR.', textStyle: 'big'},
		{src: '03.mp4', from: 0, beats: 4, text: 'Mezze faits maison', textStyle: 'serif'},
		{src: '04.mp4', from: 0, beats: 1},
		{src: '05.mp4', from: 0, beats: 1},
		{src: '06.mp4', from: 0, beats: 2, text: 'MUSIQUE', textStyle: 'big', flash: true},
		{src: '07.mp4', from: 0, beats: 2, text: 'LIVE.', textStyle: 'big'},
		{src: '08.mp4', from: 0, beats: 4, speed: 0.6, text: 'La table où Fribourg se retrouve.', textStyle: 'serif'},
		{src: '09.mp4', from: 0, beats: 2, flash: true},
	],
	endCard: {
		title: 'GALATA',
		sub: 'Café-restaurant turc · Pérolles, Fribourg',
		lines: ['Mezze maison', 'Musique live', 'Tous les soirs'],
		cta: 'Réservez · Lien en bio',
		beats: 6,
	},
};
