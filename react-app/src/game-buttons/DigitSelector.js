import React from 'react';
import './DigitSelector.css';

export default class DigitSelector extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="digit-selector-container">
				<div className="digit-container"><span>1</span></div>
				<div className="digit-container"><span>2</span></div>
				<div className="digit-container"><span>3</span></div>
				<div className="digit-container"><span>4</span></div>
				<div className="digit-container"><span>5</span></div>
				<div className="digit-container"><span>6</span></div>
				<div className="digit-container"><span>7</span></div>
				<div className="digit-container"><span>8</span></div>
				<div className="digit-container"><span>9</span></div>
			</div>
		);
	}
}
