import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-modules-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './modules.html',
  styleUrl: './modules.css'
})
export class ModulesComponent {
  demoText: string = `Angular modules help organize features. This is a long paragraph to demonstrate how a shared TruncatePipe can shorten text for previews without changing the original value.`;
}
