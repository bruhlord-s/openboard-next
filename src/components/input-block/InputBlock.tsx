import { ErrorMessage, Field } from "formik";
import React, { FC } from "react";

import styles from "./inputBlock.module.css";

interface InputBlockProps {
  name: string;
  type: "email" | "text" | "password";
  label: string;
  placeholder?: string;
}

const InputBlock: FC<InputBlockProps> = ({
  name,
  type,
  label,
  placeholder,
}: InputBlockProps) => {
  return (
    <div className={styles.inputBlock}>
      <div className={styles.inputBlock__info}>
        <label className={styles.inputBlock__label} htmlFor={name}>
          {label}
        </label>
        <ErrorMessage
          name={name}
          render={(msg) => <p className={styles.inputBlock__error}>{msg}</p>}
        />
      </div>
      <Field
        className={styles.inputBlock__input}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBlock;
