import Task from "./Task";

export default interface Board {
  id: number;
  workspace_id: number;
  color: string;
  name: string;
  tasks: Task[];
}
