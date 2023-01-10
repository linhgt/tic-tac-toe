import React from "react";
import cx from "classnames";
import style from "./button.module.scss";

const Button = (props) => {
  const { className, children, ...others } = props;

  return (
    <button className={cx(className, "common-item", style.button)}>
      {children}
    </button>
  );
};

export default Button;
