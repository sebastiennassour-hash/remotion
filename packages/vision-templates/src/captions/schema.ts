import {z} from 'zod';

/**
 * Un segment de sous-titre. Les temps sont en millisecondes depuis le début
 * de la composition (donc de la vidéo source si elle démarre à 0).
 */
export const captionSegmentSchema = z.object({
	text: z.string().describe('Texte du segment (une phrase courte, 1–2 lignes).'),
	startMs: z.number().min(0),
	endMs: z.number().min(0),
	accent: z
		.boolean()
		.optional()
		.describe('true = segment en or #C9A84C (CTA, mot-clé). Sinon ivoire #F0EBE0.'),
});

export type CaptionSegment = z.infer<typeof captionSegmentSchema>;

export const hookSchema = z.object({
	text: z.string().describe('Accroche affichée en Fraunces sur les 3 premières secondes.'),
	durationMs: z.number().min(500).max(5000).optional(),
});

export const visionCaptionsSchema = z.object({
	segments: z.array(captionSegmentSchema),
	/**
	 * Vidéo source : chemin relatif au dossier public/ (ex. "clients/bistrot.mp4")
	 * ou URL http(s). null ou "" => fond #080808.
	 */
	videoSrc: z.string().nullable().optional(),
	/** Accroche Fraunces sur 0–3 s (null = pas de hook). */
	hook: hookSchema.nullable().optional(),
	/** Animation : mot par mot (défaut) ou « caption pop » (segment entier). */
	animation: z.enum(['word-by-word', 'pop']).optional(),
	/** Taille des sous-titres, charte : 64–72 px. */
	fontSize: z.number().min(64).max(72).optional(),
	/** Longueur max d'une ligne de sous-titre en caractères (défaut : 24 à 68 px). */
	maxCharsPerLine: z.number().min(10).max(40).optional(),
	/** Fond quand il n'y a pas de vidéo : #080808 (défaut) ou transparent (pour superposer). */
	fallbackBackground: z.enum(['charcoal', 'transparent']).optional(),
	/** Dégradé noir discret en bas de l'image pour la lisibilité (défaut : true). */
	legibilityGradient: z.boolean().optional(),
	/** Durée totale forcée en ms. Sinon : fin du dernier segment + 500 ms. */
	durationMs: z.number().min(1000).optional(),
});

export type VisionCaptionsProps = z.infer<typeof visionCaptionsSchema>;
