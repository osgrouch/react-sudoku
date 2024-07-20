import React from 'react';
import './Cell.css';
import HintLabel from '../hints/HintLabel';

export default class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// TODO: consider if cell really needs to know about the state of its hints
			hints: Array(9).fill(false),
			number: props.number
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

	render() {
		return (
			<div className="cell">
				{this.state.hints.map((value, index) => {
					return (
						<HintLabel display={value} key={index} number={index} updateCell={this.updateHintDisplay}/>
					);
				})}
			</div>
		);
	}
}
