import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MARK } from "../../constant";
import ICONS from "@/assets/images/Icons";
import Switch from "@/components/switch";
import styles from "./main-menu.module.scss";
import Button from "@/components/button";

const MainMenu = () => {
  const choices = useMemo(
    () => ({
      type: {
        [MARK.X]: {
          id: 1,
          value: 1,
          name: MARK.X,
          content: () => <ICONS.X />
        },
        [MARK.O]: {
          id: 2,
          value: 2,
          name: MARK.O,
          content: () => <ICONS.O />
        }
      },
      list: [MARK.X, MARK.O]
    }),
    []
  );
  const [selectedMark, setSelectMark] = useState(MARK.X);

  const _onSelectChoices = useCallback((choice) => {
    setSelectMark(choice);
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["game-menu"]}>
        <div className={styles["game-menu__header"]}>
          <ICONS.X />
          <ICONS.O />
        </div>
        <div className={styles["game-menu__marks-card"]}>
          <h1>Pick player 1's mark</h1>
          <Switch
            listChoice={choices}
            selectedChoice={selectedMark}
            _onSelectChoices={_onSelectChoices}
          />
          <p>REMEMBER: X GOES FIRST</p>
        </div>
        <div className={styles["game-menu__btns"]}>
          <Link style={{ height: "67px" }}>
            <Button type="button" className={styles["vs_cpu"]}>
              NEW GAME (VS CPU)
            </Button>
          </Link>
          <Link style={{ height: "67px" }}>
            <Button type="button" className={styles["vs_player"]}>
              NEW GAME (VS PLAYER)
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
