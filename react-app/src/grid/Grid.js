import React from 'react';
import Box from './box/Box';
import './Grid.css';

/**
 * Component representing the 9x9 grid of Sudoku cells.
 */
export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: Array(9).fill(Array(9).fill(0)),  /* the boxes of the grid */
			puzzle: props.puzzle  /* which puzzle is this grid displaying? */
		};
	}

	render() {
		return (
			<div className="grid">
				{
					this.state.puzzle.map((box, index) => {
						return <Box cells={box} key={index}/>;
					})
				}
			</div>
		);
	}
}
