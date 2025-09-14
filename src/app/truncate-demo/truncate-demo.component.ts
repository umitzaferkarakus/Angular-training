import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-truncate-demo',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './truncate-demo.html',
  styleUrl: './truncate-demo.css'
})
export class TruncateDemoComponent {
  text: string = `Angular’s TruncatePipe shortens long text for previews without mutating the original value. ` +
    `You can customize the max length and the suffix character(s) easily.`;
}
