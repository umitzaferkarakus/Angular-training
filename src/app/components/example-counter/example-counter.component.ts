import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-counter.component.html',
  styleUrl: './example-counter.component.css'
})
export class ExampleCounterComponent {
  @Input() initialValue: number = 0;
  @Input() step: number = 1;
  @Output() valueChanged = new EventEmitter<number>();
  
  currentValue: number = 0;

  ngOnInit() {
    this.currentValue = this.initialValue;
  }

  increment() {
    this.currentValue += this.step;
    this.valueChanged.emit(this.currentValue);
  }

  decrement() {
    this.currentValue -= this.step;
    this.valueChanged.emit(this.currentValue);
  }

  reset() {
    this.currentValue = this.initialValue;
    this.valueChanged.emit(this.currentValue);
  }
}
