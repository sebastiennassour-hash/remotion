// Génère out/LEGENDES.md : le texte de chaque post + sa légende Instagram.
// Usage : bun captions.ts
import {mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
import {posts} from './src/posts';

const clean = (s: string) => s.replace(/\*/g, '').replace(/\n/g, ' ');

const describe = (p: (typeof posts)[number]) => {
	const c = p.content;
	switch (c.template) {
		case 'hero':
			return [clean(c.headline), c.sub, c.cta].filter(Boolean).join('\n');
		case 'stack':
			return [c.words.map(clean).join(' '), c.sub].join('\n');
		case 'split':
			return [
				`${c.before.label} : ${clean(c.before.text)}`,
				`${c.after.label} : ${clean(c.after.text)}`,
				c.sub,
			].join('\n');
		case 'steps':
			return [
				clean(c.headline),
				...c.steps.map(
					(s, i) => `${String(i + 1).padStart(2, '0')} ${s.title} — ${s.text}`,
				),
			].join('\n');
		case 'ticker':
			return [clean(c.headline), c.sub, c.cities.join(' · ')].join('\n');
		case 'wordmark':
			return ['VISION', c.lines.join(' '), c.tagline].join('\n');
	}
};

const lines: string[] = [
	'# Vision Agency — Campagne « 15 posts »',
	'',
	'Format 1080 × 1350 (Instagram 4:5), 6 secondes, 30 images/s. Chaque post existe en MP4 (animé) et en PNG (image fixe, frame 150).',
	'',
	'Cadence conseillée : 3 posts par semaine pendant 5 semaines, dans l’ordre. Le post 15 (Signature) peut aussi servir d’épingle de profil.',
	'',
];

posts.forEach((p, i) => {
	const n = String(i + 1).padStart(2, '0');
	lines.push(`## ${n} — ${p.label}`);
	lines.push('');
	lines.push(`Fichiers : \`VA-${n}-${p.slug}.mp4\` · \`VA-${n}-${p.slug}.png\` · Palette : ${p.palette}`);
	lines.push('');
	lines.push('**Texte à l’écran**');
	lines.push('');
	lines.push(...describe(p).split('\n').map((l) => `> ${l}`));
	lines.push('');
	lines.push('**Légende**');
	lines.push('');
	lines.push('```');
	lines.push(p.caption);
	lines.push('```');
	lines.push('');
});

const out = path.join(here, 'out');
mkdirSync(out, {recursive: true});
writeFileSync(path.join(out, 'LEGENDES.md'), lines.join('\n'));
console.log(`✔ ${posts.length} légendes → out/LEGENDES.md`);
