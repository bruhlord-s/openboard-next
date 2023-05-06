import React, { FC } from "react";
import DashboardTask from "../task/DashboardTask";

import styles from "./dashboardTasks.module.css";
import Task from "@/types/Task";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Board from "@/types/Board";

interface DashboardTasksProps {
  tasks: Task[];
  board: Board;
}

const DashboardTasks: FC<DashboardTasksProps> = ({
  tasks,
  board,
}: DashboardTasksProps) => {
  return (
    <Droppable direction="vertical" droppableId={`board_${board.id}`}>
      {(provided) => (
        <div
          className={styles.dashboardTasks}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task, i) => (
            <Draggable key={i} draggableId={`task_${task.id}`} index={i}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <DashboardTask task={task} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DashboardTasks;
