import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {SERIF} from '../fonts';
import {smooth} from './anim';

type Token = {text: string; italic: boolean};

const parseLine = (line: string): Token[] => {
	const tokens: Token[] = [];
	const re = /\*([^*]+)\*|([^*\s]+)/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(line)) !== null) {
		if (m[1] !== undefined) {
			// un groupe *…* peut contenir plusieurs mots
			for (const w of m[1].split(/\s+/)) {
				if (w) tokens.push({text: w, italic: true});
			}
		} else if (m[2]) {
			tokens.push({text: m[2], italic: false});
		}
	}
	return tokens;
};

const Word: React.FC<{
	token: Token;
	delay: number;
	accent: string;
}> = ({token, delay, accent}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = smooth(frame, fps, delay);
	const y = (1 - s) * 112;
	return (
		<span
			style={{
				display: 'inline-block',
				overflow: 'hidden',
				verticalAlign: 'top',
				paddingBottom: '0.14em',
				marginBottom: '-0.14em',
				paddingRight: '0.04em',
			}}
		>
			<span
				style={{
					display: 'inline-block',
					transform: `translateY(${y}%)`,
					fontStyle: token.italic ? 'italic' : 'normal',
					color: token.italic ? accent : undefined,
				}}
			>
				{token.text}
			</span>
		</span>
	);
};

export const Headline: React.FC<{
	text: string;
	size?: number;
	color: string;
	accent: string;
	delay?: number;
	stagger?: number;
	align?: 'left' | 'center';
	lineHeight?: number;
	fontFamily?: string;
	letterSpacing?: string;
	lineStagger?: number;
	style?: React.CSSProperties;
}> = ({
	text,
	size = 128,
	color,
	accent,
	delay = 0,
	stagger = 3,
	align = 'left',
	lineHeight = 0.96,
	fontFamily = SERIF,
	letterSpacing = '-0.025em',
	lineStagger = 0,
	style,
}) => {
	const lines = text.split('\n').map(parseLine);
	let i = 0;
	return (
		<div
			style={{
				fontFamily,
				fontSize: size,
				lineHeight,
				letterSpacing,
				color,
				textAlign: align,
				fontFeatureSettings: '"kern", "liga"',
				...style,
			}}
		>
			{lines.map((tokens, li) => (
				<div key={li} style={{whiteSpace: 'nowrap'}}>
					{tokens.map((t, wi) => {
						const d = delay + i++ * stagger + li * lineStagger;
						return (
							<React.Fragment key={wi}>
								<Word token={t} delay={d} accent={accent} />
								{wi < tokens.length - 1 ? ' ' : null}
							</React.Fragment>
						);
					})}
				</div>
			))}
		</div>
	);
};
