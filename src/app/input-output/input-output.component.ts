import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './child-components/user-card/user-card.component';
import { CounterDisplayComponent } from './child-components/counter-display/counter-display.component';
import { TodoItemComponent } from './child-components/todo-item/todo-item.component';

@Component({
  selector: 'app-input-output-page',
  standalone: true,
  imports: [CommonModule, FormsModule, UserCardComponent, CounterDisplayComponent, TodoItemComponent],
  templateUrl: './input-output.html',
  styleUrl: './input-output.css'
})
export class InputOutputComponent {
  // Example 1: User Management
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', bio: 'System administrator with 5 years experience' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', bio: 'Frontend developer specializing in Angular' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', bio: 'Project manager with strong technical background' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', bio: 'UX designer focused on user experience' }
  ];

  selectedUser: any = null;
  userCardStyle: 'default' | 'compact' | 'detailed' = 'default';
  showUserActions: boolean = true;

  // Example 2: Counter Management
  counters = [
    { id: 1, count: 0, step: 1, min: 0, max: 10, label: 'Basic Counter' },
    { id: 2, count: 5, step: 5, min: 0, max: 50, label: 'Step Counter' },
    { id: 3, count: 0, step: 2, min: -10, max: 20, label: 'Range Counter' }
  ];

  counterEvents: string[] = [];

  // Example 3: Todo Management
  todos = [
    { 
      id: 1, 
      text: 'Learn Angular Input/Output', 
      completed: false, 
      priority: 'high', 
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 2, 
      text: 'Build sample components', 
      completed: true, 
      priority: 'medium', 
      dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 3, 
      text: 'Write documentation', 
      completed: false, 
      priority: 'low', 
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 4, 
      text: 'Test all features', 
      completed: false, 
      priority: 'high', 
      dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString() 
    }
  ];

  todoEvents: string[] = [];
  newTodoText: string = '';
  newTodoPriority: string = 'medium';

  // User Management Methods
  onUserSelected(user: any) {
    this.selectedUser = user;
    console.log('User selected:', user);
  }

  onUserDeleted(user: any) {
    this.users = this.users.filter(u => u.id !== user.id);
    if (this.selectedUser?.id === user.id) {
      this.selectedUser = null;
    }
    console.log('User deleted:', user);
  }

  onUserEdited(user: any) {
    console.log('User edited:', user);
  }

  addNewUser() {
    const newUser = {
      id: this.users.length + 1,
      name: 'New User',
      email: 'newuser@example.com',
      role: 'User',
      bio: 'New user added to the system'
    };
    this.users.push(newUser);
  }

  // Counter Management Methods
  onCountChanged(counterId: number, newCount: number) {
    const counter = this.counters.find(c => c.id === counterId);
    if (counter) {
      counter.count = newCount;
    }
    this.counterEvents.push(`Counter ${counterId} changed to ${newCount}`);
    console.log(`Counter ${counterId} changed to ${newCount}`);
  }

  onCountReset(counterId: number) {
    const counter = this.counters.find(c => c.id === counterId);
    if (counter) {
      counter.count = 0;
    }
    this.counterEvents.push(`Counter ${counterId} reset to 0`);
    console.log(`Counter ${counterId} reset`);
  }

  onCountReachedMax(counterId: number, count: number) {
    this.counterEvents.push(`Counter ${counterId} reached maximum: ${count}`);
    console.log(`Counter ${counterId} reached maximum: ${count}`);
  }

  onCountReachedMin(counterId: number, count: number) {
    this.counterEvents.push(`Counter ${counterId} reached minimum: ${count}`);
    console.log(`Counter ${counterId} reached minimum: ${count}`);
  }

  clearCounterEvents() {
    this.counterEvents = [];
  }

  // Todo Management Methods
  onTodoToggled(todo: any) {
    this.todoEvents.push(`Todo "${todo.text}" ${todo.completed ? 'completed' : 'uncompleted'}`);
    console.log('Todo toggled:', todo);
  }

  onTodoDeleted(todo: any) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoEvents.push(`Todo "${todo.text}" deleted`);
    console.log('Todo deleted:', todo);
  }

  onTodoEdited(todo: any) {
    this.todoEvents.push(`Todo edited: "${todo.text}"`);
    console.log('Todo edited:', todo);
  }

  onPriorityChanged(todo: any) {
    this.todoEvents.push(`Todo "${todo.text}" priority changed to ${todo.priority}`);
    console.log('Todo priority changed:', todo);
  }

  addNewTodo() {
    if (this.newTodoText.trim()) {
      const newTodo = {
        id: this.todos.length + 1,
        text: this.newTodoText.trim(),
        completed: false,
        priority: this.newTodoPriority,
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
      };
      this.todos.push(newTodo);
      this.newTodoText = '';
    }
  }

  clearTodoEvents() {
    this.todoEvents = [];
  }

  get completedTodos(): number {
    return this.todos.filter(t => t.completed).length;
  }

  get totalTodos(): number {
    return this.todos.length;
  }
}

