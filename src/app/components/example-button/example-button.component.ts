import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-button.component.html',
  styleUrl: './example-button.component.css'
})
export class ExampleButtonComponent {
  @Input() text: string = 'Click me';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onButtonClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
