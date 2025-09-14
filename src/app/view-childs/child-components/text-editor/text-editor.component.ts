import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  @Input() content: string = '';
  @Input() placeholder: string = 'Enter text here...';
  @Input() readonly: boolean = false;
  @Input() maxLength: number = 1000;
  @Output() contentChanged = new EventEmitter<string>();
  @Output() focusChanged = new EventEmitter<boolean>();

  @ViewChild('textArea') textArea!: ElementRef<HTMLTextAreaElement>;

  isFocused: boolean = false;
  wordCount: number = 0;
  charCount: number = 0;

  ngOnInit() {
    this.updateCounts();
  }

  onContentChange() {
    this.updateCounts();
    this.contentChanged.emit(this.content);
  }

  onFocus() {
    this.isFocused = true;
    this.focusChanged.emit(true);
  }

  onBlur() {
    this.isFocused = false;
    this.focusChanged.emit(false);
  }

  private updateCounts() {
    this.charCount = this.content.length;
    this.wordCount = this.content.trim() ? this.content.trim().split(/\s+/).length : 0;
  }

  // Methods that can be called from parent
  focus() {
    if (this.textArea) {
      this.textArea.nativeElement.focus();
    }
  }

  blur() {
    if (this.textArea) {
      this.textArea.nativeElement.blur();
    }
  }

  selectAll() {
    if (this.textArea) {
      this.textArea.nativeElement.select();
    }
  }

  clear() {
    this.content = '';
    this.onContentChange();
  }

  insertText(text: string) {
    this.content += text;
    this.onContentChange();
  }

  getCursorPosition(): number {
    if (this.textArea) {
      return this.textArea.nativeElement.selectionStart;
    }
    return 0;
  }

  setCursorPosition(position: number) {
    if (this.textArea) {
      this.textArea.nativeElement.setSelectionRange(position, position);
    }
  }
}
