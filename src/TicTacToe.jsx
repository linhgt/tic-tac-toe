import React from "react";
import Button from "./components/button/Button.jsx";
import styles from './main-menu.module.scss';

const TicTacToe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gameMenu}>
        <h1>Welcome to Tic Tac Toe</h1>
        <Button>
          Hello
        </Button>
        <Button>
          How are you
        </Button> 
      </div>
    </div>
  );
};

export default TicTacToe;
