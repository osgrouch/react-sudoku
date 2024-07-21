import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SudokuLoader from './SudokuLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<SudokuLoader/>
	</React.StrictMode>
);
