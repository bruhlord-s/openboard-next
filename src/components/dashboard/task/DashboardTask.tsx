import Assignee from "@/components/assignee/Assignee";
import TimeEstimated from "@/components/time-estimated/TimeEstimated";
import React, { FC, useState } from "react";

import styles from "./dashboardTask.module.css";
import Task from "@/types/Task";
import TaskPopup from "@/popups/task/TaskPopup";

interface DashboardTaskProps {
  task: Task;
}

const DashboardTask: FC<DashboardTaskProps> = ({
  task,
}: DashboardTaskProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <div className={styles.dashboardTask} onClick={() => setIsPopupOpen(true)}>
      <p className={styles.dashboardTask__title}>{task.name}</p>
      <div className={styles.dashboardTask__info}>
        <Assignee user={task.user} />
        <TimeEstimated time={task.time_estimated} />
      </div>

      <TaskPopup open={isPopupOpen} setOpen={setIsPopupOpen} task={task} />
    </div>
  );
};

export default DashboardTask;
