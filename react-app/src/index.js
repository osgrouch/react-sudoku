import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DigitSelector from './game-actions/digit-selector/DigitSelector';
import GameActions from './game-actions/GameActions';
import Grid from './grid/Grid';
import { puzzles } from './Puzzles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div className="content-container">
			<div className="content">
				<Grid puzzle={puzzles[0]}/>
				<div className="side-actions-container">
					<div className="side-actions">
						<GameActions/>
						<DigitSelector/>
					</div>
				</div>
			</div>
		</div>
	</React.StrictMode>
);
