import React from 'react';
import {Chrome} from './components/Chrome';
import {posts} from './posts';
import {Hero} from './templates/Hero';
import {Split} from './templates/Split';
import {Stack} from './templates/Stack';
import {Steps} from './templates/Steps';
import {Ticker} from './templates/Ticker';
import {WordmarkPost} from './templates/WordmarkPost';
import {palettes} from './theme';

export type PostProps = {index: number};

export const Post: React.FC<PostProps> = ({index}) => {
	const post = posts[index - 1];
	const palette = palettes[post.palette];
	const c = post.content;

	let body: React.ReactNode;
	let footerPalette = palette;

	switch (c.template) {
		case 'hero':
			body = <Hero post={c} palette={palette} index={index} />;
			break;
		case 'stack':
			body = <Stack post={c} palette={palette} />;
			break;
		case 'split':
			body = <Split post={c} palette={palette} />;
			footerPalette = palettes.ink;
			break;
		case 'steps':
			body = <Steps post={c} palette={palette} />;
			break;
		case 'ticker':
			body = <Ticker post={c} palette={palette} />;
			break;
		case 'wordmark':
			body = <WordmarkPost post={c} palette={palette} />;
			break;
	}

	return (
		<Chrome
			palette={palette}
			footerPalette={footerPalette}
			index={index}
			label={post.label}
		>
			{body}
		</Chrome>
	);
};
