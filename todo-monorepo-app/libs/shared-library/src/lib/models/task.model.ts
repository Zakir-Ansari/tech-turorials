export interface Task {
  id: number;
  title: string;
  description?: string;
  dateTime: string;
  subTasks: SubTask[];
  completed: boolean;
}

export interface SubTask {
  id: number;
  name: string;
  status: boolean;
}
