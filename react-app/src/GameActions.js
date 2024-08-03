import React from 'react';
import './GameActions.css';

export default class GameActions extends React.Component {
	gameActions = ['annotate', 'guess', 'erase'];

	constructor(props) {
		super(props);
		this.state = {
			action: this.gameActions[0]
		};
	}

	render() {
		return (
			<div className="game-actions-container">
				<div className="game-action-btn annotations-btn"
				     onClick={() => this.setState({ action: this.gameActions[0] })}>
					<span>1</span>
				</div>
				<div className="game-action-btn guess-btn"
				     onClick={() => this.setState({ action: this.gameActions[1] })}>
					<span>1</span>
				</div>
				<div className="game-action-btn erase-btn"
				     onClick={() => this.setState({ action: this.gameActions[2] })}>
					<span>E</span>
				</div>
			</div>
		);
	}
}
