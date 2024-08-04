import React from 'react';
import './GameActions.css';

/**
 * Component for the user to select amongst the three game actions.
 */
export default class GameActions extends React.Component {
	gameActions = ['annotate', 'guess', 'erase'];

	constructor(props) {
		super(props);
		this.state = {
			selected: this.gameActions[0]  /* which game action is currently selected? */
		};
	}

	/**
	 * Create the divs for the three game actions, taking into account if it is currently selected or not.
	 * @returns {*[]} An array of divs.
	 */
	generateActionBtns = () => {
		let divs = [];
		const commonClass = 'game-action-btn';

		let calculatedClasses = commonClass + ' annotations-btn';
		if (this.state.selected === 'annotate') calculatedClasses += ' selected';
		divs.push(
			<div key={0}
			     className={calculatedClasses}
			     onClick={() => this.setState({ selected: this.gameActions[0] })}>
				<span>1</span>
			</div>
		);

		calculatedClasses = commonClass + ' guess-btn';
		if (this.state.selected === 'guess') calculatedClasses += ' selected';
		divs.push(
			<div key={1}
			     className={calculatedClasses}
			     onClick={() => this.setState({ selected: this.gameActions[1] })}>
				<span>1</span>
			</div>
		);

		calculatedClasses = commonClass + ' erase-btn';
		if (this.state.selected === 'erase') calculatedClasses += ' selected';
		divs.push(
			<div key={2}
			     className={calculatedClasses}
			     onClick={() => this.setState({ selected: this.gameActions[2] })}>
				<span>E</span>
			</div>
		);

		return divs;
	};


	render() {
		return (
			<div className="game-actions-container">
				{this.generateActionBtns()}
			</div>
		);
	}
}
