import cx from "classnames";
import s from "./button.module.scss";

const Button = (props) => {
  const { className, children, ...others } = props;

  return (
    <button className={cx(className, "common-item", s.button)} {...others}>
      {children}
    </button>
  );
};

export default Button;
