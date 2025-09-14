import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css'
})
export class CounterDisplayComponent {
  @Input() count: number = 0;
  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() showControls: boolean = true;
  @Input() label: string = 'Counter';
  @Output() countChanged = new EventEmitter<number>();
  @Output() countReset = new EventEmitter<void>();
  @Output() countReachedMax = new EventEmitter<number>();
  @Output() countReachedMin = new EventEmitter<number>();

  increment() {
    if (this.count < this.max) {
      this.count += this.step;
      this.countChanged.emit(this.count);
      
      if (this.count >= this.max) {
        this.countReachedMax.emit(this.count);
      }
    }
  }

  decrement() {
    if (this.count > this.min) {
      this.count -= this.step;
      this.countChanged.emit(this.count);
      
      if (this.count <= this.min) {
        this.countReachedMin.emit(this.count);
      }
    }
  }

  reset() {
    this.count = 0;
    this.countReset.emit();
    this.countChanged.emit(this.count);
  }

  get isAtMax(): boolean {
    return this.count >= this.max;
  }

  get isAtMin(): boolean {
    return this.count <= this.min;
  }

  get progressPercentage(): number {
    return (this.count / this.max) * 100;
  }
}
