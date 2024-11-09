export interface Task {
  id?: number;
  title: string;
  description?: string;
  subTasks: SubTask[];
}

export interface SubTask {
  name: string;
  status: boolean;
}
