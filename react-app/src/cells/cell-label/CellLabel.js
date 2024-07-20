import React from 'react';
import './CellLabel.css';

export default class CellLabel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: props.number,
			given: props.given,
			display: props.display
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
