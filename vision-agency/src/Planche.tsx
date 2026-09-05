import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Post} from './Post';
import {posts} from './posts';
import {HEIGHT, WIDTH} from './theme';

const COLS = 5;
const SCALE = 0.3;
const GAP = 40;

export const PLANCHE_WIDTH = Math.round(COLS * WIDTH * SCALE + (COLS + 1) * GAP);
export const PLANCHE_HEIGHT = Math.round(
	Math.ceil(posts.length / COLS) * HEIGHT * SCALE +
		(Math.ceil(posts.length / COLS) + 1) * GAP,
);

export const Planche: React.FC = () => (
	<AbsoluteFill style={{background: '#1A1917', padding: GAP, gap: GAP, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start'}}>
		{posts.map((_, i) => (
			<div
				key={i}
				style={{
					width: WIDTH * SCALE,
					height: HEIGHT * SCALE,
					position: 'relative',
					overflow: 'hidden',
					boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
				}}
			>
				<div
					style={{
						width: WIDTH,
						height: HEIGHT,
						transform: `scale(${SCALE})`,
						transformOrigin: 'top left',
						position: 'absolute',
					}}
				>
						<Post index={i + 1} />
				</div>
			</div>
		))}
	</AbsoluteFill>
);
