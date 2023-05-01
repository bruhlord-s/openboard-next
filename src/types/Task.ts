import User from "./User";

export default interface Task {
  id: number;
  name: string;
  description?: string;
  board_id: number;
  user: User;
  time_estimated: number;
}
