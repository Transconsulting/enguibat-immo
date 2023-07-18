import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripChar'
})
export class StripCharPipe implements PipeTransform {

  transform(chainge : string): string {
    return chainge.substring(0,100);
  }

}
