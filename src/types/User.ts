import Group from "./Group";

export default interface User {
  id: number;
  name: string;
  email: string;
  groups: Group[];
  created_at: string;
  updated_at: string;
}
