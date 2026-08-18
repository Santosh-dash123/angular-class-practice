import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskedProductId',
})
export class MaskedProductIdPipe implements PipeTransform {
  transform(value: any) {
    if (value == null) {
      alert('Value Cannot Be Null');
      return;
    } else {
      return value.substring(0, 8) + '*****';
    }
  }
}
