import { useCallback } from "react";
import cx from "classnames";
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

  return (
    <div
      className={cx(styles["switch"], styles[listChoice.type[selectedChoice].name])}
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
