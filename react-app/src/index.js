import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GameActions from './GameActions';
import Grid from './grid/Grid';
import { puzzles } from './Puzzles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div className="App">
			<Grid puzzle={puzzles[0]}/>
			<GameActions/>
		</div>
	</React.StrictMode>
);
