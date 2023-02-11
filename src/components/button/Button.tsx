import React, { CSSProperties, FC } from "react";

import styles from "./button.module.css";

interface ButtonProps {
  title: string;
  style?: CSSProperties;
  type?: "submit";
}

const Button: FC<ButtonProps> = ({ title, style, type }: ButtonProps) => {
  return (
    <button className={styles.button} style={style} type={type}>
      {title}
    </button>
  );
};

export default Button;
