import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDate'
})
export class TruncateDatePipe implements PipeTransform {

  transform(creationDate: string): string {
    return creationDate.substring(0,10);
  }

}
