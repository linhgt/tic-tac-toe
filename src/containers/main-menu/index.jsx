import React, { useMemo, useState } from "react";
// import X_ICON from "@assets/images/ic_blue_x.svg";
// import O_ICON from "@assets/images/ic_yellow_o.svg";
import { X, O } from "@assets/images/Icons";
import Switch from "@components/switch";
import { MARK } from "../../constant";
import styles from "./main-menu.module.scss";

const MainMenu = () => {
  const [selectedMark, setSelectMark] = useState();
  const listChoice = useMemo(() => [
    {
      id: 1,
      value: 1,
      name: MARK.X,
      content: <img src="" alt="X"/>
    }
  ], [])
  
  return (
    <div className={styles["container"]}>
      <div className={styles["game-menu"]}>
        <div className={styles["game-menu__header"]}>
          <X />
          <O />
        </div>
        <div className={styles["game-menu__marks-card"]}>
          <h5>Pick player 1's mark</h5>
          <div className={styles["marks"]}></div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
