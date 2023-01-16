import { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tile from './components/tile';
import styles from './game-board.module.scss';

const GameBoard = () => {
	/** Variables */
	const [playerScore, setPlayerScore] = useState({
		playerOne: 0,
		tie: 0,
		playerTwo: 0,
	})
	const state = useSelector((state) => state.ticTacToe);
	const [turn, setTurn] = useState(state.selectedMark)
	const dispatch = useDispatch();

	/** Methods */
	const _renderTiles = useCallback(() => {
		
	}, []);

	/** Render */
	return (
		<div className="container">

      <div className={styles["header"]}>
        <div className={styles["icons"]}></div>
        <div className={styles["turn"]}></div>
        <div className={stules["restart"]}></div>
      </div>

      <div className={styles["tiles"]}>
        
      </div>

      <div className={styles["footer"]}>

			</div>
		</div>
	)
};

export default GameBoard;
