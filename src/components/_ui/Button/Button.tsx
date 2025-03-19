import cn from "classnames";
import React, { FC } from "react";

import styles from "./button.module.scss";
import { IButtonProps } from "./button.props";

export const Button: FC<IButtonProps> = ({ counter, variant, children, ...props }) => (
  <button
    className={cn({
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
      [styles.outline]: variant === "outline",
    })}
    {...props}>
    {!!counter && <div className={styles.counter}>{counter}</div>}
    {children}
  </button>
);

Button.defaultProps = {
  variant: "primary",
};
