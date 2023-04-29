import React, { FC } from "react";
import DashboardBoard from "../board/DashboardBoard";

import styles from "./dashboardBoards.module.css";
import Board from "@/types/Board";

interface DashboardBoardsProps {
  boards: Board[];
}

const DashboardBoards: FC<DashboardBoardsProps> = ({
  boards,
}: DashboardBoardsProps) => {
  return (
    <div className={styles.dashboardBoards}>
      {boards?.map((board, i) => (
        <DashboardBoard board={board} key={i} />
      ))}
    </div>
  );
};

export default DashboardBoards;
