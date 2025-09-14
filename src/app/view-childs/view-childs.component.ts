import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorBoxComponent } from './child-components/color-box/color-box.component';
import { TextEditorComponent } from './child-components/text-editor/text-editor.component';
import { ProgressBarComponent } from './child-components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-view-childs-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ColorBoxComponent, TextEditorComponent, ProgressBarComponent],
  templateUrl: './view-childs.html',
  styleUrl: './view-childs.css'
})
export class ViewChildsComponent implements AfterViewInit {
  // ViewChild examples
  @ViewChild('firstColorBox') firstColorBox!: ColorBoxComponent;
  @ViewChild('textEditor') textEditor!: TextEditorComponent;
  @ViewChild('progressBar') progressBar!: ProgressBarComponent;
  @ViewChild('demoElement') demoElement!: ElementRef;

  // ViewChildren examples
  @ViewChildren(ColorBoxComponent) colorBoxes!: QueryList<ColorBoxComponent>;
  @ViewChildren(TextEditorComponent) textEditors!: QueryList<TextEditorComponent>;
  @ViewChildren(ProgressBarComponent) progressBars!: QueryList<ProgressBarComponent>;

  // Component state
  selectedColor: string = '#007bff';
  editorContent: string = 'This is a sample text for the editor. Try interacting with the ViewChild controls below!';
  progressValue: number = 30;
  maxProgress: number = 100;

  // Control states
  showViewChildControls: boolean = true;
  showViewChildrenControls: boolean = true;
  autoProgress: boolean = false;
  autoProgressInterval: any;

  // Event logs
  viewChildEvents: string[] = [];
  viewChildrenEvents: string[] = [];

  ngAfterViewInit() {
    console.log('ViewChilds initialized');
    this.logEvent('ViewChilds component initialized');
    
    // Demonstrate ViewChild access
    if (this.firstColorBox) {
      this.logEvent('First color box ViewChild found');
    }
    
    if (this.textEditor) {
      this.logEvent('Text editor ViewChild found');
    }
    
    if (this.progressBar) {
      this.logEvent('Progress bar ViewChild found');
    }

    // Demonstrate ViewChildren access
    this.logEvent(`Found ${this.colorBoxes.length} color boxes`);
    this.logEvent(`Found ${this.textEditors.length} text editors`);
    this.logEvent(`Found ${this.progressBars.length} progress bars`);
  }

  // ViewChild Methods
  changeFirstColorBoxColor() {
    if (this.firstColorBox) {
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.firstColorBox.setColor(randomColor);
      this.logEvent(`Changed first color box to ${randomColor}`);
    }
  }

  activateFirstColorBox() {
    if (this.firstColorBox) {
      this.firstColorBox.activate();
      this.logEvent('Activated first color box');
    }
  }

  deactivateFirstColorBox() {
    if (this.firstColorBox) {
      this.firstColorBox.deactivate();
      this.logEvent('Deactivated first color box');
    }
  }

  focusTextEditor() {
    if (this.textEditor) {
      this.textEditor.focus();
      this.logEvent('Focused text editor');
    }
  }

  clearTextEditor() {
    if (this.textEditor) {
      this.textEditor.clear();
      this.logEvent('Cleared text editor');
    }
  }

  selectAllText() {
    if (this.textEditor) {
      this.textEditor.selectAll();
      this.logEvent('Selected all text in editor');
    }
  }

  insertTextInEditor() {
    if (this.textEditor) {
      const timestamp = new Date().toLocaleTimeString();
      this.textEditor.insertText(`\n[${timestamp}] Text inserted via ViewChild!`);
      this.logEvent('Inserted timestamp text in editor');
    }
  }

  incrementProgress() {
    if (this.progressBar) {
      this.progressBar.increment(10);
      this.logEvent(`Incremented progress by 10 (now ${this.progressBar.value})`);
    }
  }

  decrementProgress() {
    if (this.progressBar) {
      this.progressBar.decrement(10);
      this.logEvent(`Decremented progress by 10 (now ${this.progressBar.value})`);
    }
  }

  resetProgress() {
    if (this.progressBar) {
      this.progressBar.reset();
      this.logEvent('Reset progress to 0');
    }
  }

  completeProgress() {
    if (this.progressBar) {
      this.progressBar.complete();
      this.logEvent('Completed progress (set to 100%)');
    }
  }

  // ViewChildren Methods
  activateAllColorBoxes() {
    this.colorBoxes.forEach((box, index) => {
      box.activate();
    });
    this.logEvent(`Activated all ${this.colorBoxes.length} color boxes`);
  }

  deactivateAllColorBoxes() {
    this.colorBoxes.forEach((box, index) => {
      box.deactivate();
    });
    this.logEvent(`Deactivated all ${this.colorBoxes.length} color boxes`);
  }

  randomizeAllColors() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#a8e6cf', '#ffd3a5'];
    this.colorBoxes.forEach((box, index) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      box.setColor(randomColor);
    });
    this.logEvent(`Randomized colors for all ${this.colorBoxes.length} color boxes`);
  }

  focusAllTextEditors() {
    this.textEditors.forEach((editor, index) => {
      editor.focus();
    });
    this.logEvent(`Focused all ${this.textEditors.length} text editors`);
  }

  clearAllTextEditors() {
    this.textEditors.forEach((editor, index) => {
      editor.clear();
    });
    this.logEvent(`Cleared all ${this.textEditors.length} text editors`);
  }

  resetAllProgressBars() {
    this.progressBars.forEach((bar, index) => {
      bar.reset();
    });
    this.logEvent(`Reset all ${this.progressBars.length} progress bars`);
  }

  setAllProgressBarsTo(value: number) {
    this.progressBars.forEach((bar, index) => {
      bar.setValue(value);
    });
    this.logEvent(`Set all ${this.progressBars.length} progress bars to ${value}%`);
  }

  // Auto progress functionality
  toggleAutoProgress() {
    this.autoProgress = !this.autoProgress;
    
    if (this.autoProgress) {
      this.autoProgressInterval = setInterval(() => {
        this.progressBars.forEach(bar => {
          if (bar.value < bar.max) {
            bar.increment(1);
          }
        });
      }, 100);
      this.logEvent('Started auto progress for all progress bars');
    } else {
      if (this.autoProgressInterval) {
        clearInterval(this.autoProgressInterval);
        this.autoProgressInterval = null;
      }
      this.logEvent('Stopped auto progress');
    }
  }

  // Event handlers
  onColorBoxClicked() {
    this.logEvent('Color box clicked (event from child component)');
  }

  onTextEditorContentChanged(content: string) {
    this.logEvent(`Text editor content changed: "${content.substring(0, 50)}${content.length > 50 ? '...' : ''}"`);
  }

  onTextEditorFocusChanged(focused: boolean) {
    this.logEvent(`Text editor focus changed: ${focused ? 'focused' : 'blurred'}`);
  }

  onProgressBarComplete() {
    this.logEvent('Progress bar completed!');
  }

  onProgressBarValueChanged(value: number) {
    this.logEvent(`Progress bar value changed to: ${value}`);
  }

  // Utility methods
  logEvent(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.viewChildEvents.push(`[${timestamp}] ${message}`);
    
    // Keep only last 20 events
    if (this.viewChildEvents.length > 20) {
      this.viewChildEvents = this.viewChildEvents.slice(-20);
    }
  }

  logViewChildrenEvent(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.viewChildrenEvents.push(`[${timestamp}] ${message}`);
    
    // Keep only last 20 events
    if (this.viewChildrenEvents.length > 20) {
      this.viewChildrenEvents = this.viewChildrenEvents.slice(-20);
    }
  }

  clearViewChildEvents() {
    this.viewChildEvents = [];
  }

  clearViewChildrenEvents() {
    this.viewChildrenEvents = [];
  }

  getElementInfo() {
    if (this.demoElement) {
      const element = this.demoElement.nativeElement;
      return {
        tagName: element.tagName,
        className: element.className,
        textContent: element.textContent?.substring(0, 50) + '...',
        offsetWidth: element.offsetWidth,
        offsetHeight: element.offsetHeight
      };
    }
    return null;
  }

  // Add JSON property for template access
  get JSON() {
    return JSON;
  }
}

