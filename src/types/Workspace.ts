import Board from "./Board";

export default interface Workspace {
  id: number;
  group_id: number;
  name: string;
  boards: Board[];
}
