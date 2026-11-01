import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

export const SERIF = 'Instrument Serif';
export const SANS = 'Inter Tight';
export const MONO = 'JetBrains Mono';
export const DISPLAY = 'Anton';
export const FRAUNCES = 'Fraunces';

export const loadFonts = () =>
	Promise.all([
		loadFont({
			family: SERIF,
			url: staticFile('fonts/InstrumentSerif-Regular.woff2'),
			weight: '400',
			style: 'normal',
		}),
		loadFont({
			family: SERIF,
			url: staticFile('fonts/InstrumentSerif-Italic.woff2'),
			weight: '400',
			style: 'italic',
		}),
		loadFont({
			family: SANS,
			url: staticFile('fonts/InterTight-Variable.woff2'),
			weight: '100 900',
		}),
		loadFont({
			family: DISPLAY,
			url: staticFile('fonts/Anton-Regular.woff2'),
			weight: '400',
		}),
		loadFont({
			family: FRAUNCES,
			url: staticFile('fonts/Fraunces-Regular.woff2'),
			weight: '300 900',
			style: 'normal',
		}),
		loadFont({
			family: FRAUNCES,
			url: staticFile('fonts/Fraunces-Italic.woff2'),
			weight: '300 900',
			style: 'italic',
		}),
		loadFont({
			family: MONO,
			url: staticFile('fonts/JetBrainsMono-Variable.woff2'),
			weight: '100 800',
		}),
	]);
