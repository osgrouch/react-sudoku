import React from 'react';
import Cell from '../cells/Cell';
import './Grid.css';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cells: Array(9).fill(false)
		};
	}

	render() {
		return (
			<div className="grid">
				{this.state.cells.map((value, index) => (
					<Cell number={index} key={index}/>
				))}
			</div>
		);
	}
}
