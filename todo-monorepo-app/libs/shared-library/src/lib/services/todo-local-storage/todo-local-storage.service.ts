import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoLocalStorageService {
  KEY = 'todo';

  saveNewTask(task: Task) {
    const allTasks = this.getTasks();
    task.id = allTasks.length + 1;
    allTasks.push(task);
    localStorage.setItem(this.KEY, JSON.stringify(allTasks));
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.KEY) ?? '') as Task[];
  }
}
