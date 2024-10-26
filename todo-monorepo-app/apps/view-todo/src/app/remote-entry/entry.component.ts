import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-view-todo-entry',
  template: `<span>view-todo works!</span>`,
})
export class RemoteEntryComponent {}
