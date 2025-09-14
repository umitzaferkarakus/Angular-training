import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(message: string): void {
    // Basic console logger for DI demo
    // eslint-disable-next-line no-console
    console.log(`LOG: ${message}`);
  }
}

