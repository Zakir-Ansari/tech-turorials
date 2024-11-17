import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('toast', { static: true }) toastElement!: ElementRef;
  @ViewChild('closeModal', { static: true }) closeModal!: ElementRef;
  storageService = inject(TodoLocalStorageService);
  util = inject(UtilService);
  taskForm!: FormGroup;
  isTaskSubmitted = false;
  tasks: Task[] = [];

  toastTitle = '';
  toastMessage = '';

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      subTasks: this.fb.array([this.createSubTask()]),
    });
  }

  ngOnInit(): void {
    this.tasks = this.storageService.getTasks();
  }

  resetForm() {
    this.taskForm.reset();
    this.isTaskSubmitted = false;
  }

  showToast(title: string, message: string): void {
    this.toastTitle = title;
    this.toastMessage = message;
    const toastElement = this.toastElement.nativeElement;
    // Access the bootstrap.Toast API from the global object
    const toastInstance = new (window as any).bootstrap.Toast(toastElement);
    toastInstance.show();
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
    console.log(this.taskForm, this.subTasks);
    this.isTaskSubmitted = true;
    if (!this.taskForm.valid || !this.subTasks.valid) {
      console.log();
      return;
    }
    this.storageService.saveNewTask(this.taskForm.value);
    this.closeModal.nativeElement.click();
    this.ngOnInit();
    this.showToast('Success', 'Task Saved');
    this.resetForm();
  }

  updateStubTaskStatus(givenSubTaskId: number, task: Task) {
    task.subTasks.map((subTask) => {
      if (subTask.id === givenSubTaskId) {
        subTask.status = !subTask.status;
      }
      return subTask;
    });

    this.storageService.updateTask(task);
    this.ngOnInit();
  }

  deleteTask(taskId: number) {
    this.storageService.deleteTask(taskId);
    this.showToast('Success', 'Task Deleted');
    this.ngOnInit();
  }
}
