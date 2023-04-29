import React, { FC, useState } from "react";
import DashboardBoard from "../board/DashboardBoard";

import styles from "./dashboardBoards.module.css";
import Board from "@/types/Board";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import useAxios from "@/hooks/useAxios";

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

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const boardsRepositioned = reorder(
      boards,
      result.source.index,
      result.destination.index
    );

    setBoardsState(boardsRepositioned);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="boardsDroppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className={styles.dashboardBoards}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {boardsState?.map((board, i) => (
              <Draggable key={i} draggableId={`board_${i}`} index={i}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <DashboardBoard board={board} key={i} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DashboardBoards;
