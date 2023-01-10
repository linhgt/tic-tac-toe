import React from "react";
import Button from "./components/button/Button.jsx";
import X_ICON from "./assets/images/ic_blue_x.svg";
import O_ICON from "./assets/images/ic_yellow_o.svg";
import styles from './main-menu.module.scss';

const TicTacToe = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['game-menu']}>
        <div className={styles['game-menu__header']}>
          <img src={X_ICON} alt="X"/>
          <img src={O_ICON} alt="O"/>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
