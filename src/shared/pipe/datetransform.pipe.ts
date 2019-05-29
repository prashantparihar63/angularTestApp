import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Pipe({
  name: 'datetransform'
})
export class DatetransformPipe implements PipeTransform {

  transform(value: Date, args?: string, args1?: string): string {
    let transformedDate: string;
    switch (args) {
      case 'short': {
        transformedDate = value.getDay().toString() +'-'+ value.getMonth().toString() +'-'+ value.getFullYear().toString();
        break;
      }
      case 'medium': {
        transformedDate = value.getDay().toString() +'-'+ value.getMonth().toString() +'-'+ value.getFullYear().toString() +':'+ value.getTime();
        break;
      }
      case 'long': {
        transformedDate = value.getUTCDay().toString() +'-'+ value.getUTCMonth().toString() +'-'+ value.getUTCFullYear().toString() +':'+ value.getTime();
        break;
      }
      case 'full': {
        transformedDate = value.toDateString();
        break;
      }
    }
    return transformedDate;
  }

}
