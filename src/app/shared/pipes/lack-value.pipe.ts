import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lackValue'
})
export class LackValuePipe implements PipeTransform {

  transform(value: string | number): string | number {
    if(value){
      return value;
    }
    return '-';
  }

}
