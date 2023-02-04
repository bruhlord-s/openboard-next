import Assignee from "@/components/assignee/Assignee";
import TimeEstimated from "@/components/time-estimated/TimeEstimated";
import React, { FC } from "react";

import styles from "./dashboardTask.module.css";

const DashboardTask: FC = () => {
  return (
    <div className={styles.dashboardTask}>
      <p className={styles.dashboardTask__title}>Сделать что-то</p>
      <div className={styles.dashboardTask__info}>
        <Assignee />
        <TimeEstimated />
      </div>
    </div>
  );
};

export default DashboardTask;
