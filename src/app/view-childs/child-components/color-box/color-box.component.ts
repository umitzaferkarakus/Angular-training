import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.css'
})
export class ColorBoxComponent {
  @Input() color: string = '#007bff';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label: string = 'Color Box';
  @Output() colorChanged = new EventEmitter<string>();
  @Output() clicked = new EventEmitter<void>();

  private _isActive: boolean = false;

  get isActive(): boolean {
    return this._isActive;
  }

  setColor(newColor: string) {
    this.color = newColor;
    this.colorChanged.emit(newColor);
  }

  setSize(newSize: 'small' | 'medium' | 'large') {
    this.size = newSize;
  }

  setLabel(newLabel: string) {
    this.label = newLabel;
  }

  activate() {
    this._isActive = true;
  }

  deactivate() {
    this._isActive = false;
  }

  toggle() {
    this._isActive = !this._isActive;
  }

  onClick() {
    this.clicked.emit();
  }

  getSizeClass(): string {
    return `size-${this.size}`;
  }
}
