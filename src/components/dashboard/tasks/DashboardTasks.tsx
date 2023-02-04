import React, { FC } from "react";
import DashboardTask from "../task/DashboardTask";

import styles from "./dashboardTasks.module.css";

const DashboardTasks: FC = () => {
  return (
    <div className={styles.dashboardTasks}>
      <DashboardTask />
      <DashboardTask />
      <DashboardTask />
    </div>
  );
};

export default DashboardTasks;
