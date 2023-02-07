import React, { FC } from "react";

import styles from "./authLayout.module.css";

interface AuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authLayout__content}>{children}</div>
    </div>
  );
};

export default AuthLayout;
