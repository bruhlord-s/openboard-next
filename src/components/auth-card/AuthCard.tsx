import React, { FC } from "react";

import styles from "./authCard.module.css";

interface AuthCardProps {
  title: string;
}

const AuthCard: FC<AuthCardProps> = ({ title }: AuthCardProps) => {
  return (
    <div className={styles.authCard}>
      <h2 className={styles.authCard__title}>{title}</h2>
    </div>
  );
};

export default AuthCard;
