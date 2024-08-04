import React from 'react';
import './DigitSelector.css';

/**
 * Component for the user to select a digit to focus on in the game.
 */
export default class DigitSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 1  /* which digit is currently selected? */
		};
	}

	/**
	 * Generate a div for each digit from [1, 9] taking into account if it is currently selected or not.
	 * @returns {*[]} An array of divs.
	 */
	generateDigitBtn = () => {
		let divs = [];
		for (let i = 1; i < 10; i++) {
			let className = 'digit-container';
			if (this.state.selected === i) className += ' selected';
			divs.push(
				<div key={i}
				     className={className}
				     onClick={() => this.setState({ selected: i })}>
					<span>{i}</span>
				</div>
			);
		}
		return divs;
	};

	render() {
		return (
			<div className="digit-selector-container">
				{this.generateDigitBtn()}
			</div>
		);
	}
}
