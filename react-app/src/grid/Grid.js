import React from 'react';
import Box from './box/Box';
import './Grid.css';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: Array(9).fill(0),
			difficulty: props.difficulty
		};
	}

	render() {
		return (
			<div className="grid">
				{
					this.state.boxes.map((box, index) => {
						return <Box key={index}/>;
					})
				}
			</div>
		);
	}
}
