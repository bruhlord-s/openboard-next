import Assignee from "@/components/assignee/Assignee";
import TimeEstimated from "@/components/time-estimated/TimeEstimated";
import React, { FC } from "react";

import styles from "./dashboardTask.module.css";
import Task from "@/types/Task";

interface DashboardTaskProps {
  task: Task;
}

const DashboardTask: FC<DashboardTaskProps> = ({
  task,
}: DashboardTaskProps) => {
  return (
    <div className={styles.dashboardTask}>
      <p className={styles.dashboardTask__title}>{task.name}</p>
      <div className={styles.dashboardTask__info}>
        <Assignee user={task.user} />
        <TimeEstimated time={task.time_estimated} />
      </div>
    </div>
  );
};

export default DashboardTask;
