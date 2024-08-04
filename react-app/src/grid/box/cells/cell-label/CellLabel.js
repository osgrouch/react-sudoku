import React from 'react';
import './CellLabel.css';

/**
 * Component to display the given or user-made guess for a Sudoku cell.
 */
export default class CellLabel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: props.number,   /* the number displayed on this cell */
			given: props.given,     /* is this number given? if so, it cannot be erased from this cell */
			display: props.display  /* should the label be displayed? used so that the div is only created if the cell is populated with a guess or given number. */
		};
	}

	render() {
		if (this.props.display) {
			return (
				<div className={'cell-label ' + 'given-' + this.props.given}>
					<span>{this.props.number}</span>
				</div>
			);
		}
	}
}
