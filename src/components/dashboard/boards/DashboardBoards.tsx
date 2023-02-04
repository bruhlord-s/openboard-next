import React, { FC } from "react";
import DashboardBoard from "../board/DashboardBoard";

import styles from "./dashboardBoards.module.css";

const DashboardBoards: FC = () => {
  return (
    <div className={styles.dashboardBoards}>
      <DashboardBoard />
      <DashboardBoard />
      <DashboardBoard />
    </div>
  );
};

export default DashboardBoards;
