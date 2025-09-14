import { 
  Component, 
  Input, 
  OnInit, 
  OnDestroy, 
  OnChanges, 
  SimpleChanges 
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.css'
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges {
  @Input() childInput: string = '';

  constructor() {
    console.log('👶 Child Constructor called');
  }

  ngOnInit(): void {
    console.log('👶 Child ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('👶 Child ngOnDestroy called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('👶 Child ngOnChanges called - Changes:', changes);
  }
}
