import React, { FC, useState } from "react";
import DashboardTasks from "../tasks/DashboardTasks";

import styles from "./dashboardBoard.module.css";
import Board from "@/types/Board";
import Image from "next/image";
import BoardMenu from "@/menus/board/BoardMenu";
import DeleteBoardPopup from "@/popups/delete-board/DeleteBoardPopup";
import EditBoardPopup from "@/popups/edit-board/EditBoardPopup";

interface DashboardBoardProps {
  board: Board;
}

const DashboardBoard: FC<DashboardBoardProps> = ({
  board,
}: DashboardBoardProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.dashboardBoard}>
      <div className={styles.dashboardBoard__header}>
        <span
          className={styles.dashboardBoard__color}
          style={{ backgroundColor: board.color }}
        ></span>
        <h3 className={styles.dashboardBoard__title}>{board.name}</h3>
        <BoardMenu
          trigger={
            <span className={styles.dashboardBoard__menuBtn}>
              <Image
                width="14"
                height="14"
                alt="menu"
                src="icons/menu.svg"
                style={{ transform: "rotate(90deg)" }}
              />
            </span>
          }
          board={board}
          setIsEditModalOpen={setIsEditModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />

        <span className={styles.dashboardBoard__count}>
          {board.tasks.length}
        </span>
      </div>
      <div className={styles.dashboardBoard__tasks}>
        <DashboardTasks board={board} tasks={board.tasks} />
      </div>

      <EditBoardPopup
        board={board}
        open={isEditModalOpen}
        setOpen={setIsEditModalOpen}
      />
      <DeleteBoardPopup
        board={board}
        open={isDeleteModalOpen}
        setOpen={setIsDeleteModalOpen}
      />
    </div>
  );
};

export default DashboardBoard;
