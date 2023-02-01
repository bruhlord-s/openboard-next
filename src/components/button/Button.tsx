import React, { CSSProperties, FC } from "react";

import styles from "./button.module.css";

interface ButtonProps {
  title: string;
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({ title, style }: ButtonProps) => {
  return (
    <button className={styles.button} style={style}>
      {title}
    </button>
  );
};

export default Button;
