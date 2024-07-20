import React from 'react';
import './Cell.css';
import HintLabel from './HintLabel';

export default class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hints: Array(9).fill(false)
		};

	}

	render() {
		return (
			<div className="cell">
				{this.state.hints.map((value, index) => {
					return (
						<HintLabel display={value} key={index} number={index}/>
					);
				})}
			</div>
		);
	}
}
