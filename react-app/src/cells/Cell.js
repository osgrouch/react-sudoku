import React from 'react';
import './Cell.css';
import CellLabel from './cell-label/CellLabel';
import HintLabel from './hints/HintLabel';

export default class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// TODO: consider if cell really needs to know about the state of its hints
			hints: Array(9).fill(false),  /* the value of the hint is whether it is to be displayed or not*/
			number: props.number, /* the given number for the cell, the current user guess for the number or 0 if not guessed and not given */
			display: props.given, /* if given, then display the number, if not then don't until modified later*/
			given: props.given    /* true if given, i.e. the cell cannot be erased */
		};
	}

	/**
	 * Update the state of the hints of this cell to reflect a change in display of a hint.
	 * @param number The hint to update.
	 */
	updateHintDisplay = (number) => {
		let updatedHints = this.state.hints;
		updatedHints[number] = !updatedHints[number];
		this.setState({ hints: updatedHints });
	};

	/**
	 * Decide what labels are generated for this cell.
	 * If this cell has a given value, no hint labels will be made for it.
	 * All cells must have a cell label for their guess.
	 */
	render() {
		let hintLabels;
		if (!this.state.given) {
			/* create hint labels only if this cell was not given */
			hintLabels = <div className="hint-labels-container">
				{this.state.hints.map((value, index) => {
					return (
						<HintLabel display={value} key={index} number={index} updateCell={this.updateHintDisplay}/>
					);
				})}
			</div>;
		}
		return (
			<div className="cell">
				<CellLabel number={this.state.number} given={this.state.given} display={this.state.display}/>
				{hintLabels}
			</div>
		);
	}
}
