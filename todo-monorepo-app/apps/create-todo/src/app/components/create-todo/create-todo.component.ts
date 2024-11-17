import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Task,
  TodoLocalStorageService,
  UtilService,
} from '@todo-monorepo-app/shared-library';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent implements OnInit {
  storageService = inject(TodoLocalStorageService);
  util = inject(UtilService);
  taskForm!: FormGroup;
  tasks: Task[] = [];

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      subTasks: this.fb.array([this.createSubTask()]),
    });
  }
  ngOnInit(): void {
    this.tasks = this.storageService.getTasks();
    console.log('Tasks', this.tasks);
  }

  // Create a new SubTask form group
  createSubTask(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      status: [false],
    });
  }

  // Add a new SubTask to the FormArray
  addSubTask(): void {
    (this.taskForm.get('subTasks') as FormArray).push(this.createSubTask());
  }

  // Remove a SubTask from the FormArray
  removeSubTask(index: number): void {
    console.log(index);
    (this.taskForm.get('subTasks') as FormArray).removeAt(index);
  }

  // Get the subTasks FormArray
  get subTasks(): FormArray {
    return this.taskForm.get('subTasks') as FormArray;
  }

  // Submit the form
  saveTask(): void {
    if (this.taskForm.valid) {
      this.storageService.saveNewTask(this.taskForm.value);
    }
  }
}
