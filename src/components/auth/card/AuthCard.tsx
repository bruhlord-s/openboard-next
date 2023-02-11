import React, { FC } from "react";

import styles from "./authCard.module.css";

interface AuthCardProps {
  title: string;
  children: JSX.Element;
}

const AuthCard: FC<AuthCardProps> = ({ title, children }: AuthCardProps) => {
  return (
    <div className={styles.authCard}>
      <h2 className={styles.authCard__title}>{title}</h2>
      <div className={styles.authCard__form}>{children}</div>
    </div>
  );
};

export default AuthCard;
