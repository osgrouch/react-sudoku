import React from 'react';
import Cell from './cells/Cell';
import './Box.css';

/**
 * Component representing a 3x3 box of cells.
 */
export default class Box extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cells: props.cells  /* the value of a cell is the given number for the cell, the current user guess for the number or 0 if not guessed and not given  */
		};
	}

	render() {
		return (
			<div className="box">
				{this.state.cells.map((value, index) => (
					<Cell number={value} key={index}/>
				))}
			</div>
		);
	}
}
