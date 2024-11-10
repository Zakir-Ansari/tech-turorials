import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoLocalStorageService {
  KEY = 'todo';

  saveNewTask(task: Task) {
    task.dateTime = new Date().toLocaleString();
    const allTasks = this.getTasks();
    task.id = allTasks.length + 1;
    allTasks.push(task);
    localStorage.setItem(this.KEY, JSON.stringify(allTasks));
  }

  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.KEY);
    if (tasks) return JSON.parse(tasks) as Task[];
    return [];
  }
}
