import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoLocalStorageService {
  KEY = 'todo';

  saveNewTask(task: Task) {
    const allTasks = this.getTasks();
    task.completed = false;
    task.dateTime = new Date().toLocaleString();
    task.id = Math.max(...allTasks.map((task) => task.id), 0) + 1;
    task.subTasks.map((subTask, index) => (subTask.id = index + 1));
    allTasks.push(task);
    localStorage.setItem(this.KEY, JSON.stringify(allTasks));
  }

  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.KEY);
    if (tasks) return JSON.parse(tasks) as Task[];
    return [];
  }

  updateTask(task: Task) {
    if (!task.id || task.id < 1) {
      console.error('Unknown task id to update: ', task.id);
      return;
    }

    task.completed = task.subTasks.filter((st) => !st.status).length === 0;
    const updatedTasks = this.getTasks().map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    localStorage.setItem(this.KEY, JSON.stringify(updatedTasks));
  }

  deleteTask(taskId: number) {
    if (taskId < 1) {
      console.error('Unknown task id to delete: ', taskId);
      return;
    }

    localStorage.setItem(
      this.KEY,
      JSON.stringify(this.getTasks().filter((task) => task.id !== taskId))
    );
  }
}
