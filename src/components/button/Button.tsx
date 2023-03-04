import React, { CSSProperties, FC } from "react";

import styles from "./button.module.css";

interface ButtonProps {
  title: string;
  style?: CSSProperties;
  type?: "submit";
  disabled?: boolean;
  onClick?: () => any;
}

const Button: FC<ButtonProps> = ({
  title,
  style,
  type,
  disabled,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      style={style}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
