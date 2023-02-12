import Image from "next/image";
import React, { FC } from "react";

import styles from "./errorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({
  message,
}: ErrorMessageProps) => {
  return (
    <div className={styles.errorMessage}>
      <div className={styles.errorMessage__icon}>
        <Image
          width={24}
          height={24}
          alt="Error"
          src="/icons/info-circle.svg"
        />
      </div>
      <p className={styles.errorMessage__message}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
