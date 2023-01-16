import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './game-board.module.scss';

const GameBoard = () => {
	/** Variables */
	const [playerScore, setPlayerScore] = useState({
		playerOne: 0,
		tie: 0,
		playerTwo: 0,
	})
	const state = useSelector((state) => state.ticTacToe);
	const dispatch = useDispatch();

	/** Methods */


	/** Render */
	return (
		<div className="container">hello</div>
	)
};

export default GameBoard;
