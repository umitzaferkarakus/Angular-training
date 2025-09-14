import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit: number = 100, suffix: string = '…'): string {
    const text = (value ?? '').toString();
    if (limit <= 0 || text.length <= limit) {
      return text;
    }
    return text.slice(0, Math.max(0, limit)).trimEnd() + suffix;
  }
}
