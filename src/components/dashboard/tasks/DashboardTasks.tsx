import React, { FC } from "react";
import DashboardTask from "../task/DashboardTask";

import styles from "./dashboardTasks.module.css";
import Task from "@/types/Task";

interface DashboardTasksProps {
  tasks: Task[];
}

const DashboardTasks: FC<DashboardTasksProps> = ({
  tasks,
}: DashboardTasksProps) => {
  return (
    <div className={styles.dashboardTasks}>
      {tasks.map((task, i) => (
        <DashboardTask task={task} key={i} />
      ))}
    </div>
  );
};

export default DashboardTasks;
