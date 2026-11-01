import {writeFileSync} from 'node:fs';
import {visionReels} from './src/vision/edls';
const lines = ['# Légendes — Reels Vision (VF)', ''];
visionReels.forEach((r, i) => {
	lines.push(`## VF-${String(i + 1).padStart(2, '0')} — ${r.label}`, '', '```', r.caption, '```', '');
});
writeFileSync('out/LEGENDES-VF.md', lines.join('\n'));
console.log('✔ out/LEGENDES-VF.md');
