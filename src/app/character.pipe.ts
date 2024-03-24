import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'character',
  standalone: true
})
export class CharacterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,2);
  }

}
