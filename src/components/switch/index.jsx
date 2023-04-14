import React, { useCallback } from "react";
import cx from "classnames";
import { MARK } from "../../constant";
import styles from "./switch.module.scss";

const Switch = (props = {}) => {
  const { listChoice = null, _onSelectChoices, selectedChoice = null } = props;

  const _onClickButton = useCallback(
    (e, choice) => {
      e.preventDefault();
      _onSelectChoices(choice);
    },
    [_onSelectChoices]
  );

  const isSelected = useCallback(
    (choice) => {
      return choice === selectedChoice;
    },
    [selectedChoice]
  );

  return (
    <div
      className={cx(styles["switch"], {
        [styles.x]: selectedChoice === MARK.X,
        [styles.o]: selectedChoice === MARK.O
      })}
    >
      {listChoice && listChoice.list.length > 0
        ? listChoice.list.map((choice) => (
            <div
              key={listChoice.type[choice].id}
              className={cx(
                styles["choice"],
                styles[listChoice.type[choice].name]
              )}
              onClick={(e) => _onClickButton(e, choice)}
            >
              {listChoice.type[choice].content()}
            </div>
          ))
        : null}
    </div>
  );
};

export default Switch;
