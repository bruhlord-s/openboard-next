import Board from "./Board";
import Group from "./Group";

export default interface Workspace {
  id: number;
  group_id: number;
  name: string;
  boards: Board[];
  group: Group;
}
