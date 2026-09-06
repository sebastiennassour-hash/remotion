// Aperçu de la grille Instagram : 12 premiers posts, 3 colonnes (1080 × 1440), pour valider l'ensemble.
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {PhotoPostView} from '../profile/PhotoPosts';
import {photoPosts} from '../profile/photoPosts.data';

export const GridPreview: React.FC<{order: number[]}> = ({order}) => (
	<AbsoluteFill style={{background: '#000'}}>
		{order.slice(0, 12).map((idx, k) => {
			const col = k % 3;
			const row = Math.floor(k / 3);
			return (
				<div key={k} style={{position: 'absolute', left: col * 360 + col * 0, top: row * 360, width: 360, height: 360, overflow: 'hidden', border: '1px solid #000'}}>
					<div style={{position: 'absolute', left: 0, top: -45, width: 1080, height: 1350, transform: 'scale(0.3333)', transformOrigin: 'top left'}}>
						<PhotoPostView post={photoPosts[idx]} />
					</div>
				</div>
			);
		})}
	</AbsoluteFill>
);
