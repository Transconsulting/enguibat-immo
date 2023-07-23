import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatemission'
})
export class TruncateMissionPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 100) {
      return value.substr(0, 100) + '...';
    }
    return value;
  }

}
