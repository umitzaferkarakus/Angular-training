import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: any = {};
  @Input() showActions: boolean = true;
  @Input() cardStyle: 'default' | 'compact' | 'detailed' = 'default';
  @Output() userSelected = new EventEmitter<any>();
  @Output() userDeleted = new EventEmitter<any>();
  @Output() userEdited = new EventEmitter<any>();

  onSelect() {
    this.userSelected.emit(this.user);
  }

  onDelete() {
    this.userDeleted.emit(this.user);
  }

  onEdit() {
    this.userEdited.emit(this.user);
  }
}
