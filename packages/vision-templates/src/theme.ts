/**
 * Charte VISION (04-BRAND-GUIDELINES-VISION.md) — valeurs partagées par
 * toutes les compositions. Ne jamais introduire de couleur vive ici.
 */

export const VISION_COLORS = {
	/** Noir absolu (hero, sections premium). */
	black: '#050505',
	/** Noir VISION (fond principal). */
	charcoal: '#080808',
	/** Noir charbon (sections alternées). */
	coal: '#0F0F0F',
	/** Or VISION signature (CTA, accents). Jamais en fond. */
	gold: '#C9A84C',
	/** Or chaud (hover). */
	goldLight: '#D4B872',
	/** Ivoire chaud (texte principal). */
	ivory: '#F0EBE0',
	/** Gris chaud (légendes). */
	warmGrey: '#8A8275',
} as const;

/** Réglages typographiques de la charte (section « Typographie »). */
export const VISION_TYPE = {
	/** Display : Fraunces 300 italic, -0.06em, line-height 0.92. */
	display: {fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.06em', lineHeight: 0.92},
	/** H1 : Fraunces 400, -0.03em, line-height 1.05. */
	h1: {fontWeight: 400, fontStyle: 'normal', letterSpacing: '-0.03em', lineHeight: 1.05},
	/** Caveat 500, or #C9A84C. */
	signature: {fontWeight: 500, fontStyle: 'italic'},
} as const;

export const VISION_FONTS = {
	/** Titres et mot VISION (300 italic). */
	title: 'Fraunces',
	/** Texte courant et sous-titres (Bold). */
	text: 'Inter',
	/** Signature manuscrite « On remplit vos tables ». */
	signature: 'Caveat',
} as const;

/** Format reel : 1080x1920 @ 30 fps. */
export const REEL = {
	width: 1080,
	height: 1920,
	fps: 30,
} as const;

/** Sous-titres : Inter Bold 64–72 px, contour 2 px noir, 200 px du bas, line-height jamais < 1.2. */
export const CAPTION_STYLE = {
	fontSize: 68,
	lineHeight: 1.2,
	strokeWidth: 2,
	paddingBottom: 200,
	paddingX: 80,
	/** ~24 caractères tiennent sur 920 px en Inter Bold 68 px. */
	maxCharsPerLine: 24,
} as const;

/** Durée du hook (Fraunces) : 0–3 s. */
export const HOOK_DURATION_MS = 3000;

/** Outro : 1 s max, opacité 70–80 %. */
export const OUTRO = {
	durationInFrames: 30,
	opacity: 0.75,
} as const;

export const msToFrame = (ms: number, fps: number): number =>
	Math.round((ms / 1000) * fps);
