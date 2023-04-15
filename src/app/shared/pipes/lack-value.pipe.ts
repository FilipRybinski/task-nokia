import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lackValue',
})
export class LackValuePipe implements PipeTransform {
  // If data is empty returns '-', because is will beter looks in table
  transform(value: string | number): string | number {
    if (value) {
      return value;
    }
    return '-';
  }
}
