import Assignee from "@/components/assignee/Assignee";
import TimeEstimated from "@/components/time-estimated/TimeEstimated";
import React, { FC, useContext, useState } from "react";

import styles from "./dashboardTask.module.css";
import Task from "@/types/Task";
import TaskPopup from "@/popups/task/TaskPopup";
import DeleteTaskPopup from "@/popups/delete-task/DeleteTaskPopup";
import EditTaskPopup from "@/popups/edit-task/EditTaskPopup";
import { WorkspaceDataContext } from "../Dashboard";

interface DashboardTaskProps {
  task: Task;
}

const DashboardTask: FC<DashboardTaskProps> = ({
  task,
}: DashboardTaskProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const workspace = useContext(WorkspaceDataContext);

  return (
    <div className={styles.dashboardTask} onClick={() => setIsPopupOpen(true)}>
      <p className={styles.dashboardTask__title}>{task.name}</p>
      <div className={styles.dashboardTask__info}>
        <Assignee user={task.user} />
        <TimeEstimated time={task.time_estimated} />
      </div>

      <TaskPopup
        open={isPopupOpen}
        setOpen={setIsPopupOpen}
        task={task}
        setIsEditModalOpen={setIsEditModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
      />

      <EditTaskPopup
        open={isEditModalOpen}
        setOpen={setIsEditModalOpen}
        task={task}
        workspace={workspace}
      />
      <DeleteTaskPopup
        open={isDeleteModalOpen}
        setOpen={setIsDeleteModalOpen}
        task={task}
      />
    </div>
  );
};

export default DashboardTask;
