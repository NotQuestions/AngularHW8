import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printMas'
})
export class PrintMasPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    let str = '';
    for (const arg of args) {
      str += `${arg} `;
    }
    return str;
  }

}

