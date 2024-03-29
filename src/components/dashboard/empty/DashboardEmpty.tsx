import { FC } from "react";

import styles from "./dashboardEmpty.module.css";

const DashboardEmpty: FC = () => {
  return (
    <div className={styles.dashboardEmpty}>
      <h1 className={styles.dashboardEmpty__kaomoji}>¯\(°_o)/¯</h1>
      <p className={styles.dashboardEmpty__message}>Выберите проект</p>
    </div>
  );
};

export default DashboardEmpty;
