import React from 'react';
import Box from './box/Box';
import './Grid.css';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: Array(9).fill(Array(9).fill(0)),
			puzzle: props.puzzle
		};
	}

	render() {
		return (
			<div className="grid">
				{
					this.state.puzzle.map((box, index) => {
						return <Box cells={box} key={index}/>;
					})
				}
			</div>
		);
	}
}
