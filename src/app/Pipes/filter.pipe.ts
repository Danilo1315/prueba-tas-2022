import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string): any {
    if (value === '' || filteredString === '') {
      return value;
    }

    const products = [];
    for (const pdts of value){
      console.log(pdts['name'])
      if (pdts['name'] === filteredString){
        products.push(pdts);
      }
    }
    return products;
  }

}
