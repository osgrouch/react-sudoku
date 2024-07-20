import React from 'react';
import './HintLabel.css';

/**
 * Component to display a hint for a Sudoku cell.
 */
export default class HintLabel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayHint: props.display, /* to display a hint or not */
			num: props.number       /* what number is this hint?*/
		};
	}

	/**
	 * Toggle the display state of this hint.
	 */
	toggleDisplay = () => {
		this.setState({
			displayHint: !this.state.displayHint
		});
		this.props.updateCell(this.state.num);
	};

	render() {
		return (
			<div onClick={this.toggleDisplay} className={'hint-label ' + 'hint-display-' + this.state.displayHint}>
				{/* +1 because the props array will be [0, 8] but Sudoku is [1, 9] */}
				<span>{this.state.num + 1}</span>
			</div>
		);
	};
}
