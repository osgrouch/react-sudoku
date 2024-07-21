import Grid from './grid/Grid';
import { puzzles } from './Puzzles';

export default function SudokuLoader(props) {
	return (
		<div className="App">
			<Grid puzzle={puzzles[props.difficulty]}/>
		</div>
	);
}
