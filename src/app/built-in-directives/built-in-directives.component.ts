import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-built-in-directives-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './built-in-directives.html',
  styleUrl: './built-in-directives.css'
})
export class BuiltInDirectivesComponent {
  // *ngIf and [hidden]
  showPanel = true;
  useHidden = false;

  // *ngFor demo data
  products = [
    { id: 1, name: 'Laptop', price: 1999, inStock: true, quantity: 1 },
    { id: 2, name: 'Mouse', price: 39, inStock: true, quantity: 2 },
    { id: 3, name: 'Keyboard', price: 79, inStock: false, quantity: 0 },
    { id: 4, name: 'Monitor', price: 299, inStock: true, quantity: 1 }
  ];

  trackByProductId(_index: number, item: any) { return item.id; }

  // ngSwitch demo
  status: 'success' | 'warning' | 'error' | 'idle' = 'idle';

  // [ngClass] and [ngStyle]
  isActive = true;
  isDisabled = false;
  theme: 'light' | 'dark' = 'light';
  dynamicColor = '#007bff';
  dynamicSize = 16;

  // [attr] bindings
  ariaLabel = 'Demo button';
  dataTestId = 'demo-cta';
}
