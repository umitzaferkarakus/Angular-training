import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-dependency-injection-page',
  standalone: true,
  templateUrl: './dependency-injection.html',
  styleUrl: './dependency-injection.css'
})
export class DependencyInjectionComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('DependencyInjectionComponent loaded');
  }

  sendLog(): void {
    this.logger.log('Button clicked');
  }
}
