import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateAnnonce'
})
export class TruncateAnnoncePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 40) {
      return value.substr(0, 75) + '...';
    }
    return value;
  }
}
