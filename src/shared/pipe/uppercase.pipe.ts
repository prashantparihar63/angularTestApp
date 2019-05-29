import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const valueArray: string[] = value.split(' ');
    let newValue: string;
    for (let index = 0; index < valueArray.length; index++) {
      if (index === 0) {
        newValue = valueArray[index].substring(1, 0).toUpperCase() + valueArray[index].substring(1, valueArray[index].length).toLocaleLowerCase();
      }
      else {
        newValue += ' ' + valueArray[index].substring(1, 0).toUpperCase() + valueArray[index].substring(1, valueArray[index].length).toLocaleLowerCase();
      }
    }
    return newValue;
  }

}
