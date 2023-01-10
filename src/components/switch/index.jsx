import React, { useCallback, useState } from "react";
import Button from "@components/button";
import cx from "classnames";
import styles from "./switch.module.scss";

const Switch = (props) => {
  const { listChoice, _onSelectChoices, defaultSelected } = props;
  const [selected, setSelected] = useState(defaultSelected);

  const _onClickButton = useCallback((e, choice) => {
    e.preventDefault();
    _onSelectChoices(choice.value);
    setSelected(choice);
  }, [_onSelectChoices]);

  return (
    <div className={styles["switch"]}>
      {listChoice.length > 0
        ? listChoice.map((choice) => {
            <Button
              type="button"
              key={choice.id}
              className={cx(styles["choice"], { [styles.selected]: choice.value === selected.value })}
              onClick={(e) => _onClickButton(e, choice)}
            >
              {choice.content}
            </Button>;
          })
        : null}
    </div>
  );
};

export default Switch;
