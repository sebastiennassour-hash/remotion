// Génère LEGENDES-POSTS-PHOTO.md depuis src/profile/photoPosts.data.ts
// Usage : npx tsx captions-photo.mts
import {writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {photoPosts} from './src/profile/photoPosts.data';

const here = fileURLToPath(new URL('.', import.meta.url));
const lines: string[] = [
	'# Légendes — 20 posts photo Vision',
	'',
	'Hashtags en premier commentaire : `#restaurantsuisse #gastronomiesuisse #fribourg #lausanne #geneve #videomarketing #agencevideo #restaurantmarketing`',
	'',
];
photoPosts.forEach((p, i) => {
	const n = String(i + 1).padStart(2, '0');
	lines.push(`## POST-${n} — ${p.slug}`, '');
	lines.push(`Texte à l’image : ${(p.line ?? p.kicker).replace(/\*/g, '').replace(/\n/g, ' ')}`, '');
	lines.push('```', p.caption, '```', '');
});
writeFileSync(path.join(here, 'LEGENDES-POSTS-PHOTO.md'), lines.join('\n'));
console.log(`✔ LEGENDES-POSTS-PHOTO.md (${photoPosts.length} posts)`);
