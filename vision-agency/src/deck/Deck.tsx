// Deck de prospection : pages 1240 × 1754 (A4 portrait), noir / or / crème, photos de la série.
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {FRAUNCES, MONO, SANS, DISPLAY} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const M = 96;

export type DeckPage =
	| {kind: 'cover'; title: string; sub: string; photo: string}
	| {kind: 'statement'; kicker: string; title: string; body: string; photo?: string}
	| {kind: 'numbers'; kicker: string; items: {big: string; label: string}[]; note: string}
	| {kind: 'steps'; kicker: string; title: string; steps: {n: string; t: string; d: string}[]}
	| {kind: 'photos'; kicker: string; photos: string[]}
	| {kind: 'offer'; kicker: string; title: string; lines: string[]; price?: string; cta: string};

const Head: React.FC<{kicker: string; n: number; total: number; light?: boolean}> = ({kicker, n, total, light}) => (
	<div style={{position: 'absolute', top: M - 20, left: M, right: M, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
		<Wordmark color={light ? INK : IVORY} size={22} />
		<div style={{fontFamily: MONO, fontSize: 17, letterSpacing: '0.16em', textTransform: 'uppercase', color: light ? 'rgba(8,8,8,0.6)' : 'rgba(240,235,224,0.7)'}}>{kicker} · {String(n).padStart(2, '0')}/{String(total).padStart(2, '0')}</div>
	</div>
);

export const DeckPageView: React.FC<{pages: DeckPage[]; i: number}> = ({pages, i}) => {
	const p = pages[i];
	const n = i + 1;
	const total = pages.length;
	if (p.kind === 'cover') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<Img src={staticFile(`photos/${p.photo}`)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
				<AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%)'}} />
				<div style={{position: 'absolute', top: M, left: M}}><Wordmark color={IVORY} size={28} /></div>
				<div style={{position: 'absolute', left: M, right: M, bottom: M + 40}}>
					<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: 92, lineHeight: 1.02, letterSpacing: '-0.02em', color: IVORY, whiteSpace: 'pre-line'}}>{p.title}</div>
					<div style={{marginTop: 34, fontFamily: SANS, fontWeight: 300, fontSize: 28, lineHeight: 1.4, color: 'rgba(240,235,224,0.85)', maxWidth: 900, whiteSpace: 'pre-line'}}>{p.sub}</div>
				</div>
				<Grain opacity={0.05} />
			</AbsoluteFill>
		);
	}
	if (p.kind === 'statement') {
		return (
			<AbsoluteFill style={{background: INK}}>
				{p.photo ? (
					<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 880, overflow: 'hidden'}}>
						<Img src={staticFile(`photos/${p.photo}`)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
						<div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0) 30%, rgba(8,8,8,0) 70%, rgba(8,8,8,1) 100%)'}} />
					</div>
				) : null}
				<Head kicker={p.kicker} n={n} total={total} />
				<div style={{position: 'absolute', left: M, right: M, top: p.photo ? 900 : 420}}>
					<div style={{width: 56, height: 1.5, background: GOLD, marginBottom: 34}} />
					<div style={{fontFamily: FRAUNCES, fontWeight: 400, fontSize: 68, lineHeight: 1.06, letterSpacing: '-0.02em', color: IVORY, whiteSpace: 'pre-line'}}>{p.title}</div>
					<div style={{marginTop: 36, fontFamily: SANS, fontWeight: 300, fontSize: 27, lineHeight: 1.5, color: 'rgba(240,235,224,0.82)', maxWidth: 960, whiteSpace: 'pre-line'}}>{p.body}</div>
				</div>
				<Grain opacity={0.05} />
			</AbsoluteFill>
		);
	}
	if (p.kind === 'numbers') {
		return (
			<AbsoluteFill style={{background: INK, padding: M, justifyContent: 'center'}}>
				<Head kicker={p.kicker} n={n} total={total} />
				<div style={{display: 'flex', flexDirection: 'column', gap: 70}}>
					{p.items.map((it, k) => (
						<div key={k} style={{display: 'flex', alignItems: 'baseline', gap: 40, borderBottom: '1px solid rgba(240,235,224,0.15)', paddingBottom: 40}}>
							<div style={{fontFamily: DISPLAY, fontSize: 190, lineHeight: 0.9, color: GOLD, minWidth: 460}}>{it.big}</div>
							<div style={{fontFamily: FRAUNCES, fontSize: 40, lineHeight: 1.15, color: IVORY, maxWidth: 520}}>{it.label}</div>
						</div>
					))}
				</div>
				<div style={{position: 'absolute', left: M, right: M, bottom: M, fontFamily: MONO, fontSize: 16, letterSpacing: '0.06em', color: 'rgba(240,235,224,0.5)', lineHeight: 1.6}}>{p.note}</div>
				<Grain opacity={0.05} />
			</AbsoluteFill>
		);
	}
	if (p.kind === 'steps') {
		return (
			<AbsoluteFill style={{background: '#F0EBE0', padding: M}}>
				<Head kicker={p.kicker} n={n} total={total} light />
				<div style={{marginTop: 150, fontFamily: FRAUNCES, fontWeight: 400, fontSize: 68, lineHeight: 1.05, letterSpacing: '-0.02em', color: INK, whiteSpace: 'pre-line'}}>{p.title}</div>
				<div style={{marginTop: 70, display: 'flex', flexDirection: 'column', gap: 46}}>
					{p.steps.map((s, k) => (
						<div key={k} style={{display: 'flex', gap: 40, alignItems: 'flex-start', borderTop: '1px solid rgba(8,8,8,0.15)', paddingTop: 34}}>
							<div style={{fontFamily: MONO, fontSize: 20, color: GOLD, minWidth: 70, paddingTop: 10}}>{s.n}</div>
							<div>
								<div style={{fontFamily: FRAUNCES, fontSize: 40, color: INK}}>{s.t}</div>
								<div style={{marginTop: 12, fontFamily: SANS, fontWeight: 300, fontSize: 25, lineHeight: 1.5, color: 'rgba(8,8,8,0.75)', maxWidth: 880}}>{s.d}</div>
							</div>
						</div>
					))}
				</div>
				<Grain opacity={0.04} />
			</AbsoluteFill>
		);
	}
	if (p.kind === 'photos') {
		return (
			<AbsoluteFill style={{background: INK, padding: M}}>
				<Head kicker={p.kicker} n={n} total={total} />
				<div style={{position: 'absolute', left: M, right: M, top: 190, bottom: M, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr', gap: 18}}>
					{p.photos.slice(0, 6).map((ph, k) => (
						<div key={k} style={{overflow: 'hidden', background: '#111'}}>
							<Img src={staticFile(`photos/${ph}`)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
						</div>
					))}
				</div>
				<Grain opacity={0.05} />
			</AbsoluteFill>
		);
	}
	return (
		<AbsoluteFill style={{background: INK, padding: M, justifyContent: 'center'}}>
			<Head kicker={p.kicker} n={n} total={total} />
			<div style={{width: 56, height: 1.5, background: GOLD, marginBottom: 34}} />
			<div style={{fontFamily: FRAUNCES, fontWeight: 400, fontSize: 72, lineHeight: 1.04, letterSpacing: '-0.02em', color: IVORY, whiteSpace: 'pre-line'}}>{p.title}</div>
			<div style={{marginTop: 50, display: 'flex', flexDirection: 'column', gap: 22}}>
				{p.lines.map((l, k) => (
					<div key={k} style={{display: 'flex', gap: 24, alignItems: 'baseline', fontFamily: SANS, fontWeight: 300, fontSize: 28, lineHeight: 1.4, color: 'rgba(240,235,224,0.88)'}}>
						<span style={{color: GOLD}}>◆</span>
						<span>{l}</span>
					</div>
				))}
			</div>
			{p.price ? <div style={{marginTop: 70, fontFamily: DISPLAY, fontSize: 120, color: GOLD, lineHeight: 1}}>{p.price}</div> : null}
			<div style={{position: 'absolute', left: M, right: M, bottom: M, fontFamily: MONO, fontSize: 19, letterSpacing: '0.12em', textTransform: 'uppercase', color: IVORY}}>{p.cta}</div>
			<Grain opacity={0.05} />
		</AbsoluteFill>
	);
};
