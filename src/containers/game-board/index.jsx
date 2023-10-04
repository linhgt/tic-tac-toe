import { useState } from "react";
import Tile from "./components/tile";
import styles from "./game-board.module.scss";
import ICONS from "@/assets/images/Icons";
import Result from "@/containers/result";
import cx from "classnames";
import { Profiler } from "react";

const GameBoard = () => {
  /** Variables */
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(Array(3).fill(0));

  const handleClick = (i) => {
    if (board[i] || finish) {
      return;
    }

    const nextBoard = board.slice(); // Create a new copy of board's state
    if (isXNext) {
      nextBoard[i] = { value: "X", win: false };
    } else {
      nextBoard[i] = { value: "O", win: false };
    }
    setBoard(nextBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(nextBoard);
    if (winner || (!winner && !nextBoard.some((tile) => tile === null))) {
      setFinish(true);
      handleSetScore(winner, score, nextBoard);
    }
  };

  const handleSetScore = (winner, score, board) => {
    const nextScore = score.slice();
    if (winner === "X") {
      nextScore[0]++;
    } else if (winner === "O") {
      nextScore[2]++;
    } else if (!winner && !board.some((tile) => tile == null)) {
      nextScore[1]++;
    }
    setScore(nextScore);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setFinish(false);
  };

  /** Render */
  return (
    <Profiler id="gameBoard" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
      console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
    }}>
      <div className="container">
        {finish && <Result />}
        <div className={styles["header"]}>
          <div className={styles["icons"]}>
            <ICONS.X />
            <ICONS.O />
          </div>
          <div className={styles["turn"]}>
            {isXNext ? <ICONS.X /> : <ICONS.O />}
            <span>Turn</span>
          </div>
          <button className={styles["restart"]} onClick={() => handleRestart()}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z"
                fill="#1F3641"
              ></path>
            </svg>
          </button>
        </div>

        <div className={styles["tiles"]}>
          {board.map((tile, index) => 
            <Tile
              tileData={tile ? tile : null}
              handleClickTile={() => handleClick(index)}
              isXNext={isXNext}
              key={index}
            ></Tile>)
          }
        </div>

        <div className={styles["footer"]}>
          <div className={cx(styles["x-score"], styles["tabs"])}>
            <div>X (P1)</div>
            <span>{score[0]}</span>
          </div>
          <div className={cx(styles["tie-score"], styles["tabs"])}>
            <div>Ties</div>
            <span>{score[1]}</span>
          </div>
          <div className={cx(styles["o-score"], styles["tabs"])}>
            <div>O (P2)</div>
            <span>{score[2]}</span>
          </div>
        </div>
      </div>
    </Profiler>
  );
};

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      board[a] &&
      board[b] &&
      board[c] &&
      board[a].value === board[b].value &&
      board[a].value === board[c].value
    ) {
      board[a].win = true;
      board[b].win = true;
      board[c].win = true;
      return board[a].value;
    }
  }

  return null;
}

export default GameBoard;
