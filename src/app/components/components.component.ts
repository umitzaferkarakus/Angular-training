import { Component } from '@angular/core';
import { ExampleButtonComponent } from './example-button/example-button.component';
import { ExampleCardComponent } from './example-card/example-card.component';
import { ExampleCounterComponent } from './example-counter/example-counter.component';

@Component({
  selector: 'app-components-page',
  standalone: true,
  imports: [ExampleButtonComponent, ExampleCardComponent, ExampleCounterComponent],
  templateUrl: './components.html',
  styleUrl: './components.css'
})
export class ComponentsComponent {
  buttonClickCount = 0;
  counterValue = 0;

  onButtonClick() {
    this.buttonClickCount++;
    console.log('Button clicked! Count:', this.buttonClickCount);
  }

  onCounterChange(value: number) {
    this.counterValue = value;
    console.log('Counter value changed to:', value);
  }
}

