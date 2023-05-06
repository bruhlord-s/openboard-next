import React, { FC, useState } from "react";
import BasePopup from "../BasePopup";
import PopupProps from "../types/PopupProps";

import styles from "../formPopup.module.css";
import styles2 from "./taskPopup.module.css";

import Task from "@/types/Task";
import Avatar from "@/components/avatar/Avatar";
import TaskToolbar from "@/components/task-toolbar/TaskToolbar";

interface TaskPopupProps extends PopupProps {
  task: Task;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskPopup: FC<TaskPopupProps> = ({
  open,
  setOpen,
  task,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
}: TaskPopupProps) => {
  const convertSecondsToTime = (seconds: number): string => {
    let hours = Math.floor(seconds / (60 * 60));

    let divisorForMinutes = seconds % (60 * 60);
    let minutes = Math.floor(divisorForMinutes / 60);

    return `${hours ? `${hours}h` : ""}${minutes ? ` ${minutes}m` : ""}`;
  };

  return (
    <BasePopup
      open={open}
      setOpen={setOpen}
      title="Task"
      toolbar={
        <TaskToolbar
          task={task}
          setIsParentModalOpen={setOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      }
    >
      <div className={styles.formPopup}>
        <div className={styles.formPopup__form}>
          <div className={styles2.popup__body}>
            <div className={styles2.popup__column} style={{ width: 300 }}>
              <div className={styles2.popup__block}>
                <p className={styles2.popup__blockName}>Name</p>
                <p className={styles2.popup__blockValue}>{task.name}</p>
              </div>
              <div className={styles2.popup__block}>
                <p className={styles2.popup__blockName}>Board</p>
                <div className={styles2.popup__blockValueRow}>
                  <span
                    className={styles2.popup__boardColor}
                    style={{ backgroundColor: task.board.color }}
                  ></span>
                  <p className={styles2.popup__blockValue}>{task.board.name}</p>
                </div>
              </div>

              <div className={styles2.popup__block}>
                <p className={styles2.popup__blockName}>Assignee</p>
                <div className={styles2.popup__blockValueRow}>
                  <Avatar width={36} height={36} src="/images/avatar.png" />
                  <p className={styles2.popup__blockValue}>{task.user.name}</p>
                </div>
              </div>
              <div className={styles2.popup__block}>
                <p className={styles2.popup__blockName}>Author</p>
                <div className={styles2.popup__blockValueRow}>
                  <Avatar width={36} height={36} src="/images/avatar.png" />
                  <p className={styles2.popup__blockValue}>{task.user.name}</p>
                </div>
              </div>
              <div className={styles2.popup__time}>
                <div className={styles2.popup__block}>
                  <p className={styles2.popup__blockName}>Time Estimated</p>
                  <p className={styles2.popup__blockValue}>
                    {convertSecondsToTime(task.time_estimated)}
                  </p>
                </div>
                <div className={styles2.popup__block}>
                  <p className={styles2.popup__blockName}>Time Spent</p>
                  <p className={styles2.popup__blockValue}>0h</p>
                </div>
              </div>
            </div>
            <div
              className={styles2.popup__column}
              style={{ width: 400, justifyContent: "space-between" }}
            >
              <div className={styles2.popup__block}>
                <p className={styles2.popup__blockName}>Description</p>
                <p className={styles2.popup__blockValueDescription}>
                  {task.description ? task.description : "No description =("}
                </p>
              </div>
              {task.attachments.length > 0 && (
                <div className={styles2.popup__attachments}>
                  <p className={styles2.popup__blockName}>Attachments</p>
                  <div className={styles2.popup__attachmentsRow}>
                    {task.attachments.map((attachment, i) => (
                      <a
                        href={process.env.NEXT_PUBLIC_API_URL + attachment.file}
                        target="_blank"
                        key={i}
                      >
                        <img
                          className={styles2.popup__attachment}
                          src={
                            process.env.NEXT_PUBLIC_API_URL + attachment.file
                          }
                          alt="attachment"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BasePopup>
  );
};

export default TaskPopup;
