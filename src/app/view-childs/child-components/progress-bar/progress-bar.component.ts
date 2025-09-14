import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() showPercentage: boolean = true;
  @Input() animated: boolean = true;
  @Input() color: string = '#007bff';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label: string = '';
  @Output() progressComplete = new EventEmitter<void>();
  @Output() valueChanged = new EventEmitter<number>();

  private _isComplete: boolean = false;

  get percentage(): number {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }

  get isComplete(): boolean {
    return this._isComplete;
  }

  get displayValue(): string {
    return this.showPercentage ? `${Math.round(this.percentage)}%` : `${this.value}/${this.max}`;
  }

  getSizeClass(): string {
    return `size-${this.size}`;
  }

  setValue(newValue: number) {
    const oldValue = this.value;
    this.value = Math.min(this.max, Math.max(0, newValue));
    
    if (oldValue !== this.value) {
      this.valueChanged.emit(this.value);
      
      if (this.value >= this.max && !this._isComplete) {
        this._isComplete = true;
        this.progressComplete.emit();
      } else if (this.value < this.max && this._isComplete) {
        this._isComplete = false;
      }
    }
  }

  increment(amount: number = 1) {
    this.setValue(this.value + amount);
  }

  decrement(amount: number = 1) {
    this.setValue(this.value - amount);
  }

  reset() {
    this.setValue(0);
    this._isComplete = false;
  }

  complete() {
    this.setValue(this.max);
  }
}
