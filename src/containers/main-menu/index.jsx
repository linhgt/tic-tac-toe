import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { _selectMark, _selectGameMode } from "@/store/tic-tac-toe";
import { GAME_MODE, MARK } from "@/constant";
import ICONS from "@/assets/images/Icons";
import Switch from "@/containers/main-menu/components/switch";
import styles from "./main-menu.module.scss";
import Button from "@/components/button";

const MainMenu = () => {
  /** Variables */
  const selectedMark = useSelector((state) => state.TicTacToe.selectedMark);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** Choices */
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

  /** Methods */
  const _onSelectChoices = useCallback((choice) => {
    dispatch(_selectMark(choice));
  }, []);

  const _onSelectGameMode = (e, gameMode) => {
    e.preventDefault();
    dispatch(_selectGameMode(gameMode));
    navigate("/game-board");
  };

  /** Render */
  return (
    <div className={"container"}>
      <div className={styles["game-menu"]}>
        {/* Header */}
        <div className={styles["game-menu__header"]}>
          <ICONS.X />
          <ICONS.O />
        </div>

        {/* Selections */}
        <div className={styles["game-menu__marks-card"]}>
          <h1>PICK PLAYER 1'S MARK</h1>
          <Switch
            listChoice={choices}
            selectedChoice={selectedMark}
            _onSelectChoices={_onSelectChoices}
          />
          <p>REMEMBER: X GOES FIRST</p>
        </div>

        {/* Buttons */}
        <div className={styles["game-menu__btns"]}>
          {/* VS CPU */}
          <div style={{ height: "67px" }}>
            <Button
              type="button"
              className={styles["vs_cpu"]}
              onClick={(e) => _onSelectGameMode(e, GAME_MODE.VS_CPU)}
            >
              NEW GAME (VS CPU)
            </Button>
          </div>

          {/* VS PLAYER */}
          <div style={{ height: "67px" }}>
            <Button
              type="button"
              className={styles["vs_player"]}
              onClick={(e) => _onSelectGameMode(e, GAME_MODE.VS_PLAYER)}
            >
              NEW GAME (VS PLAYER)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
