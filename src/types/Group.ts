import Workspace from "./Workspace";

export default interface Group {
  id: number;
  name: string;
  slug: string;
  workspaces: Workspace[];
}
