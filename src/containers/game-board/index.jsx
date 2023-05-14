import { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MARK } from "@/constant";
import Tile from './components/tile';
import styles from './game-board.module.scss';
import ICONS from "@/assets/images/Icons";
import cx from 'classnames';

const GameBoard = () => {
	/** Variables */
	const selectedMark = useSelector((state) => state.TicTacToe.selectedMark);
	const [turn, setTurn] = useState(selectedMark)
	const dispatch = useDispatch();
	const [playerScore, setPlayerScore] = useState({
		X: 0,
		tie: 0,
		O: 0,
	})

	const renderIcon = () => {
		switch(selectedMark) {
			case MARK.X:
				return <ICONS.X fill="#a8bfc9"/>
			case MARK.O:
				return <ICONS.O fill="#a8bfc9"/>
			default:
				return null
		}
	}

	const renderTiles = () => {
		return (
			<>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
			</>
		)
	}
	/** Render */
	return (
	<div className="container">
      <div className={styles["header"]}>
        <div className={styles["icons"]}>
			<ICONS.X />
			<ICONS.O />
		</div>
        <div className={styles["turn"]}>
			{renderIcon()}
			<span>Turn</span>
		</div>
        <button className={styles["restart"]}>
			<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
				<path d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z" fill="#1F3641">
					</path>
			</svg>
		</button>
      </div>

      <div className={styles["tiles"]}>
		{renderTiles()}
	  </div>

      <div className={styles["footer"]}>
		<div class={cx(styles["x-score"], styles["tabs"])}>{playerScore.X}</div>
		<div class={cx(styles["tie-score"], styles["tabs"])}>{playerScore.tie}</div>
		<div class={cx(styles["o-score"], styles["tabs"])}>{playerScore.O}</div>
	  </div>
	</div>
	)
};

export default GameBoard;
