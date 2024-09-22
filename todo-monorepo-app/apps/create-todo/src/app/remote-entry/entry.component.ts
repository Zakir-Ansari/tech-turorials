import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from '../components/create-todo/create-todo.component';

@Component({
  standalone: true,
  imports: [CommonModule, CreateTodoComponent],
  selector: 'app-create-todo-entry',
  template: `<app-create-todo></app-create-todo>`,
})
export class RemoteEntryComponent {}
