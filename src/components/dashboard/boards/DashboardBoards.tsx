import React, { FC, useContext, useState } from "react";
import DashboardBoard from "../board/DashboardBoard";

import styles from "./dashboardBoards.module.css";
import Board from "@/types/Board";
import { DragDropContext } from "react-beautiful-dnd";
import useAxios from "@/hooks/useAxios";
import { WorkspaceContext } from "@/pages";
import {
  SetWorkspaceContext,
  UpdateWorkspaceContext,
  WorkspaceDataContext,
} from "../Dashboard";

const reorder = (list: Array<any>, startIndex: number, endIndex: number) => {
  console.log(startIndex, endIndex);
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);

  return list;
};

interface DashboardBoardsProps {
  boards: Board[];
}

const DashboardBoards: FC<DashboardBoardsProps> = ({
  boards,
}: DashboardBoardsProps) => {
  const [boardsState, setBoardsState] = useState<Board[]>(boards);

  const axios = useAxios();
  const workspaceId = useContext(WorkspaceContext)?.currentWorkspaceId;
  const workspace = useContext(WorkspaceDataContext);
  const setWorkspace = useContext(SetWorkspaceContext);

  const onDragEnd = (result: any) => {
    console.log(result);

    if (!result.destination) return;

    const sourceBoardId = result.source.droppableId.split("_")[1];
    const taskId = result.draggableId.split("_")[1];
    const boardId = result.destination.droppableId.split("_")[1];

    let newWorkspace = { ...workspace };

    const task = newWorkspace.boards
      .find((board) => board.id == sourceBoardId)
      ?.tasks.find((task) => task.id == taskId)!;

    task.board = newWorkspace.boards.find((board) => board.id == boardId)!;

    if (result.source.droppableId === result.destination.droppableId) {
      newWorkspace.boards
        .find((board) => board.id == boardId)
        ?.tasks.splice(result.source.index, 1);

      newWorkspace.boards
        .find((board) => board.id == boardId)
        ?.tasks.splice(result.destination.index, 0, task);

      setWorkspace(newWorkspace);

      return;
    }

    const newSourceBoard = newWorkspace.boards
      .find((board) => {
        return board.id == sourceBoardId;
      })
      ?.tasks.filter((task) => task.id != taskId)!;

    newWorkspace.boards
      .find((board) => board.id == boardId)
      ?.tasks.splice(result.destination?.index, 0, task)!;

    newWorkspace.boards.find((board) => board.id == sourceBoardId)!.tasks =
      newSourceBoard;

    setWorkspace(newWorkspace);

    axios.put(`/task/${taskId}`, { board_id: boardId }).then(() => {
      axios.get(`/workspace/${workspaceId}`).then((res) => {
        // setWorkspace(res.data.data);
      });
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.dashboardBoards}>
        {boardsState?.map((board, i) => (
          <div key={i}>
            <DashboardBoard board={board} />
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default DashboardBoards;
