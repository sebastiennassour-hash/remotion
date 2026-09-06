// Carrousels : slides photo « quiet » numérotées + slides texte noir/or. 1080 × 1350.
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {FRAUNCES, MONO, SANS} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const M = 64;

export type Slide =
	| {kind: 'photo'; photo: string; focus?: string}
	| {kind: 'text'; title: string; sub?: string; gold?: boolean};

export type CarouselDef = {slug: string; kicker: string; slides: Slide[]; caption: string};

const Top: React.FC<{kicker: string; i: number; n: number}> = ({kicker, i, n}) => (
	<div style={{position: 'absolute', top: M, left: M, right: M, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
		<Wordmark color={IVORY} size={20} />
		<div style={{fontFamily: MONO, fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,235,224,0.85)'}}>
			{kicker} · {String(i + 1).padStart(2, '0')}/{String(n).padStart(2, '0')}
		</div>
	</div>
);

export const CarouselSlide: React.FC<{def: CarouselDef; i: number}> = ({def, i}) => {
	const s = def.slides[i];
	const n = def.slides.length;
	if (s.kind === 'photo') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<Img src={staticFile(`photos/${s.photo}`)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.focus ?? '50% 50%'}} />
				<AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%)'}} />
				<Top kicker={def.kicker} i={i} n={n} />
				<Grain opacity={0.06} />
			</AbsoluteFill>
		);
	}
	return (
		<AbsoluteFill style={{background: INK, padding: M, justifyContent: 'center'}}>
			<Top kicker={def.kicker} i={i} n={n} />
			<div style={{width: 56, height: 1.5, background: GOLD, marginBottom: 34}} />
			<div style={{fontFamily: FRAUNCES, fontWeight: 400, fontSize: 84, lineHeight: 1.04, letterSpacing: '-0.02em', color: s.gold ? GOLD : IVORY, maxWidth: 900, whiteSpace: 'pre-line'}}>{s.title}</div>
			{s.sub ? <div style={{marginTop: 40, fontFamily: SANS, fontWeight: 300, fontSize: 30, lineHeight: 1.45, color: 'rgba(240,235,224,0.78)', maxWidth: 820, whiteSpace: 'pre-line'}}>{s.sub}</div> : null}
			<div style={{position: 'absolute', bottom: M, left: M, fontFamily: MONO, fontSize: 18, letterSpacing: '0.16em', color: 'rgba(240,235,224,0.5)'}}>@vision.agency</div>
			<Grain opacity={0.05} />
		</AbsoluteFill>
	);
};
