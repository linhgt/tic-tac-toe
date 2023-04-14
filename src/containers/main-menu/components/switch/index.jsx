import { useCallback } from "react";
import styles from "./switch.module.scss";

const Switch = (props = {}) => {
  const { listChoice = null, _onSelectChoices, selectedChoice = null } = props;
  const { type, list: choices } = listChoice;

  const _onClickButton = useCallback(
    (e, choice) => {
      e.preventDefault();
      _onSelectChoices(choice);
    },
    [_onSelectChoices]
  );

  const wrapperClasses = styles["switch"] + " " + styles[type[selectedChoice].name];
  const choiceClasses = (choice) => styles["choice"] + " " + styles[type[choice].name];

  return (
    <div className={wrapperClasses}>
      {listChoice && choices.length > 0
        ? choices.map((choice) => (
            <div
              key={type[choice].id}
              className={choiceClasses(choice)}
              onClick={(e) => _onClickButton(e, choice)}
            >
              {type[choice].content()}
            </div>
          ))
        : null}
    </div>
  );
};

export default Switch;
