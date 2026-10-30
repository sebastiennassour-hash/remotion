import {loadFont as loadCaveat} from '@remotion/google-fonts/Caveat';
import {loadFont as loadFraunces} from '@remotion/google-fonts/Fraunces';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';
import {useEffect, useState} from 'react';
import {cancelRender, continueRender, delayRender} from 'remotion';

/**
 * Polices de la charte VISION, chargées via @remotion/google-fonts.
 * - Fraunces : titres (400) et mot VISION (300 italic)
 * - Inter : sous-titres (700)
 * - Caveat : signature « On remplit vos tables » (500/600)
 *
 * Les appels sont faits au niveau du module : le chargement démarre dès que
 * le bundle est évalué. Chaque loadFont() pose déjà un delayRender() ;
 * useVisionFonts() ajoute une garde explicite pour les composants.
 */
const fraunces = loadFraunces('normal', {
	weights: ['300', '400'],
	subsets: ['latin', 'latin-ext'],
});
const frauncesItalic = loadFraunces('italic', {
	weights: ['300'],
	subsets: ['latin', 'latin-ext'],
});
const inter = loadInter('normal', {
	weights: ['700'],
	subsets: ['latin', 'latin-ext'],
});
const caveat = loadCaveat('normal', {
	weights: ['500', '600'],
	subsets: ['latin', 'latin-ext'],
});

export const fontFamilies = {
	fraunces: fraunces.fontFamily,
	inter: inter.fontFamily,
	caveat: caveat.fontFamily,
} as const;

export const waitForVisionFonts = (): Promise<void> =>
	Promise.all([
		fraunces.waitUntilDone(),
		frauncesItalic.waitUntilDone(),
		inter.waitUntilDone(),
		caveat.waitUntilDone(),
	]).then(() => undefined);

/**
 * Bloque le rendu tant que les trois polices ne sont pas disponibles,
 * et renvoie `true` une fois prêtes (utile pour éviter un flash de fallback
 * dans le Studio).
 */
export const useVisionFonts = (): boolean => {
	const [ready, setReady] = useState(false);
	const [handle] = useState(() =>
		delayRender('Chargement des polices VISION (Fraunces, Inter, Caveat)', {
			timeoutInMilliseconds: 60000,
		}),
	);

	useEffect(() => {
		let cancelled = false;
		waitForVisionFonts()
			.then(() => {
				if (!cancelled) {
					setReady(true);
				}
				continueRender(handle);
			})
			.catch((err) => {
				cancelRender(err);
			});
		return () => {
			cancelled = true;
		};
	}, [handle]);

	return ready;
};
