export default interface CreateTaskValues {
  name: string;
  board_id?: number;
  assignee_id?: number;
  description?: string;
  time_estimated?: number;
}