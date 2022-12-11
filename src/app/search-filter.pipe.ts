import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './model/car.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: Car[], filterText: string): any {
    return list ? list.filter(item =>
    item.nomCar.toLowerCase().includes(filterText)) : [];
    }

}
