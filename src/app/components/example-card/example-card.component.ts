import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-card.component.html',
  styleUrl: './example-card.component.css'
})
export class ExampleCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() imageUrl: string = '';
  @Input() showImage: boolean = true;
}
