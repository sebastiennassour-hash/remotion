// Rend les 15 posts en MP4 + PNG (image fixe) et la planche contact.
// Usage : bun render.mts [--stills-only] [--only=VA-01-Manifeste]
import {bundle} from '@remotion/bundler';
import {
	getCompositions,
	renderMedia,
	renderStill,
	type RenderMediaOnProgress,
} from '@remotion/renderer';
import {existsSync, mkdirSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));

const STILL_FRAME = 150;
const args = process.argv.slice(2);
const stillsOnly = args.includes('--stills-only');
const only = args.find((a) => a.startsWith('--only='))?.slice(7);
const prefix = args.find((a) => a.startsWith('--prefix='))?.slice(9) ?? 'VA-';

const browserExecutable =
	process.env.CHROME_PATH ??
	[
		'/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell',
		'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
	].find((p) =>
		existsSync(p),
	) ??
	null;

const out = path.join(here, 'out');
mkdirSync(out, {recursive: true});

const serveUrl = await bundle({
	entryPoint: path.join(here, 'src/index.ts'),
	publicDir: path.join(here, 'public'),
});

const compositions = await getCompositions(serveUrl, {browserExecutable});
const targets = compositions.filter((c) =>
	only ? c.id === only : c.id.startsWith(prefix),
);

const started = Date.now();
for (const composition of targets) {
	const isStill = composition.id === 'VA-Planche';
	const png = path.join(out, `${composition.id}.png`);

	await renderStill({
		composition,
		serveUrl,
		output: png,
		frame: Math.min(STILL_FRAME, composition.durationInFrames - 1),
		imageFormat: 'png',
		browserExecutable,
		chromiumOptions: {gl: 'angle'},
	});
	console.log(`✔ ${composition.id}.png`);

	if (isStill || stillsOnly) continue;

	let last = -1;
	const onProgress: RenderMediaOnProgress = ({progress}) => {
		const pct = Math.floor(progress * 10) * 10;
		if (pct !== last) {
			last = pct;
			process.stdout.write(`  ${composition.id} ${pct}%\r`);
		}
	};

	await renderMedia({
		composition,
		serveUrl,
		codec: 'h264',
		outputLocation: path.join(out, `${composition.id}.mp4`),
		browserExecutable,
		chromiumOptions: {gl: 'angle'},
		onProgress,
		crf: 16,
	});
	console.log(`✔ ${composition.id}.mp4`);
}

console.log(
	`\nTerminé : ${targets.length} compositions en ${Math.round(
		(Date.now() - started) / 1000,
	)}s → ${out}`,
);
process.exit(0);
