export interface Task {
  id?: number;
  title: string;
  description?: string;
  dateTime: string;
  subTasks: SubTask[];
}

export interface SubTask {
  name: string;
  status: boolean;
}
