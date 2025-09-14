import { 
  Component, 
  OnInit, 
  OnDestroy, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  Input,
  SimpleChanges,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';

@Component({
  selector: 'app-lifecycle-hooks-page',
  standalone: true,
  imports: [CommonModule, LifecycleChildComponent],
  templateUrl: './lifecycle-hooks.html',
  styleUrl: './lifecycle-hooks.css'
})
export class LifecycleHooksComponent implements 
  OnInit, 
  OnDestroy, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked {
  
  @Input() inputValue: string = 'Initial Value';
  @ViewChild('lifecycleDemo') lifecycleDemo!: ElementRef;
  
  counter: number = 0;
  showChild: boolean = true;
  childInput: string = 'Child Input Value';

  constructor(private cdr: ChangeDetectorRef) {
    console.log('🔧 Constructor called - Component is being created');
  }

  // Called after the constructor, initializing input properties, and the first call to ngOnChanges
  ngOnInit(): void {
    console.log('🚀 ngOnInit called - Component initialization complete');
    console.log('   - Best for: Initialization logic, API calls, subscriptions');
  }

  // Called before the component is destroyed
  ngOnDestroy(): void {
    console.log('💀 ngOnDestroy called - Component is being destroyed');
    console.log('   - Best for: Cleanup, unsubscribing from observables, clearing timers');
  }

  // Called before ngOnInit and whenever one or more input properties change
  ngOnChanges(changes: SimpleChanges): void {
    console.log('🔄 ngOnChanges called - Input properties have changed');
    console.log('   - Changes:', changes);
    console.log('   - Best for: Reacting to input changes');
  }

  // Called during every change detection run, immediately after ngOnChanges and ngOnInit
  ngDoCheck(): void {
    console.log('🔍 ngDoCheck called - Change detection cycle');
    console.log('   - Best for: Custom change detection logic');
  }

  // Called once after the first ngDoCheck
  ngAfterContentInit(): void {
    console.log('📦 ngAfterContentInit called - Content projection initialized');
    console.log('   - Best for: Accessing projected content');
  }

  // Called after ngAfterContentInit and every subsequent ngDoCheck
  ngAfterContentChecked(): void {
    console.log('📦✅ ngAfterContentChecked called - Content projection checked');
    console.log('   - Best for: Reacting to projected content changes');
  }

  // Called once after the first ngAfterContentChecked
  ngAfterViewInit(): void {
    console.log('👁️ ngAfterViewInit called - Component view initialized');
    console.log('   - Best for: Accessing ViewChild, DOM manipulation');
    if (this.lifecycleDemo) {
      console.log('   - ViewChild element:', this.lifecycleDemo.nativeElement);
    }
  }

  // Called after ngAfterViewInit and every subsequent ngAfterContentChecked
  ngAfterViewChecked(): void {
    console.log('👁️✅ ngAfterViewChecked called - Component view checked');
    console.log('   - Best for: Reacting to view changes');
  }

  // Methods to demonstrate lifecycle hooks
  incrementCounter() {
    this.counter++;
    console.log('Counter incremented to:', this.counter);
  }

  toggleChild() {
    this.showChild = !this.showChild;
    console.log('Child visibility toggled:', this.showChild);
  }

  updateInputValue() {
    this.inputValue = `Updated at ${new Date().toLocaleTimeString()}`;
    console.log('Input value updated:', this.inputValue);
  }

  updateChildInput() {
    this.childInput = `Child updated at ${new Date().toLocaleTimeString()}`;
    console.log('Child input updated:', this.childInput);
  }

  triggerChangeDetection() {
    this.cdr.detectChanges();
    console.log('Manual change detection triggered');
  }
}

