import React from 'react';
import './HintLabel.css';

export default function HintLabel(props) {
	return (
		<div className="hint-label">
			{/* +1 because the props array will be [0, 8] but Sudoku is [1, 9] */}
			<span>{props.number + 1}</span>
		</div>
	);
}
