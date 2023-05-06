import { FC } from "react";

import styles from "./taskToolbar.module.css";
import Image from "next/image";
import Task from "@/types/Task";

interface TaskToolbarProps {
  task: Task;
  setIsParentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskToolbar: FC<TaskToolbarProps> = ({
  setIsParentModalOpen,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
}) => {
  return (
    <div className={styles.taskToolbar}>
      <div
        className={styles.taskToolbar__option}
        onClick={() => {
          setIsParentModalOpen(false);
          setIsEditModalOpen(true);
        }}
      >
        <Image
          width={20}
          height={20}
          src="/icons/material_edit.svg"
          alt="edit"
        />
      </div>
      <div
        className={styles.taskToolbar__option}
        onClick={() => {
          setIsParentModalOpen(false);
          setIsDeleteModalOpen(true);
        }}
      >
        <Image
          width={20}
          height={20}
          src="/icons/material_trash.svg"
          alt="trash"
        />
      </div>
    </div>
  );
};

export default TaskToolbar;
