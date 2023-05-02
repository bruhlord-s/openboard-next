import Board from "./Board";
import TaskAttachment from "./TaskAttachment";
import User from "./User";

export default interface Task {
  id: number;
  name: string;
  description?: string;
  board_id: number;
  user: User;
  board: Board;
  time_estimated: number;
  attachments: TaskAttachment[];
}
