import React, { FC } from "react";
import DashboardTasks from "../tasks/DashboardTasks";

import styles from "./dashboardBoard.module.css";
import Board from "@/types/Board";

interface DashboardBoardProps {
  board: Board;
}

const DashboardBoard: FC<DashboardBoardProps> = ({
  board,
}: DashboardBoardProps) => {
  return (
    <div className={styles.dashboardBoard}>
      <div className={styles.dashboardBoard__header}>
        <span
          className={styles.dashboardBoard__color}
          style={{ backgroundColor: board.color }}
        ></span>
        <h3 className={styles.dashboardBoard__title}>{board.name}</h3>
        <span className={styles.dashboardBoard__count}>
          {board.tasks.length}
        </span>
      </div>
      {board.tasks.length > 0 ?? (
        <div className={styles.dashboardBoard__tasks}>
          <DashboardTasks tasks={board.tasks} />
        </div>
      )}
    </div>
  );
};

export default DashboardBoard;
