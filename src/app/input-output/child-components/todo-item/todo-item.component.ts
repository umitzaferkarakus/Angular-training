import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: any = {};
  @Input() showPriority: boolean = true;
  @Input() showDate: boolean = true;
  @Input() editable: boolean = true;
  @Output() todoToggled = new EventEmitter<any>();
  @Output() todoDeleted = new EventEmitter<any>();
  @Output() todoEdited = new EventEmitter<any>();
  @Output() priorityChanged = new EventEmitter<any>();

  isEditing: boolean = false;
  editText: string = '';

  startEdit() {
    if (this.editable) {
      this.isEditing = true;
      this.editText = this.todo.text;
    }
  }

  saveEdit() {
    if (this.editText.trim()) {
      this.todo.text = this.editText.trim();
      this.todoEdited.emit(this.todo);
    }
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
    this.editText = '';
  }

  toggleComplete() {
    this.todo.completed = !this.todo.completed;
    this.todoToggled.emit(this.todo);
  }

  deleteTodo() {
    this.todoDeleted.emit(this.todo);
  }

  changePriority(newPriority: string) {
    this.todo.priority = newPriority;
    this.priorityChanged.emit(this.todo);
  }

  get priorityClass(): string {
    return `priority-${this.todo.priority?.toLowerCase() || 'medium'}`;
  }

  get isOverdue(): boolean {
    if (!this.todo.dueDate) return false;
    return new Date(this.todo.dueDate) < new Date();
  }
}
