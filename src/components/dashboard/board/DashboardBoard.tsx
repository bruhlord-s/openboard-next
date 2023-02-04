import React, { FC } from "react";
import DashboardTasks from "../tasks/DashboardTasks";

import styles from "./dashboardBoard.module.css";

const DashboardBoard: FC = () => {
  return (
    <div className={styles.dashboardBoard}>
      <div className={styles.dashboardBoard__header}>
        <span className={styles.dashboardBoard__color}></span>
        <h3 className={styles.dashboardBoard__title}>To-Do</h3>
        <span className={styles.dashboardBoard__count}>3</span>
      </div>
      <div className={styles.dashboardBoard__tasks}>
        <DashboardTasks />
      </div>
    </div>
  );
};

export default DashboardBoard;
