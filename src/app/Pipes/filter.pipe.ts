import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string, FilteredPrice: string, FilteredCat:string): any {
    // console.log("this is cat: "+FilteredCat);
    // console.log("this is price: "+FilteredPrice);
    // console.log("this is search: "+filteredString);

    if (filteredString != ""){
      FilteredPrice = "";
      console.log("string: "+ value)
      if (filteredString != ""){
        console.log("this is search: "+value);
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

    if (FilteredCat != ""){
      if (value === '' || FilteredCat === undefined) {
        return value;
      }

      console.log("this value cat: "+FilteredCat)
      var str = new String(FilteredCat)
      str.split(",");
      const products = [];

      for(let z = 0; z < str.length; z++){
        for (let i = 0; i < value.length; i++){
          for (let x = 0; x < value[i]['categories'].length; x++){
            // console.log(str[z]);
            if (value[i]['categories'][x] === Number(str[z])){
              products.push(value[i]);
            }
          }
        }
        z += 1;
      }
      // console.log(products);

      return products;
    }

    if (FilteredPrice === "priceAsc" || FilteredPrice === "priceDesc") {
      if (value === '') {
        return value;
      }

      console.log("this value price: "+FilteredPrice)
      const products = [];
      const _prices = [];

      for (const pdts of value){
        _prices.push(pdts['price']);
      }
      if (FilteredPrice === "priceAsc"){
        _prices.sort((a, b) => a - b);
      } else {
        _prices.sort((a, b) => b - a);
      }
      // console.log(_prices);

      for (let i = 0; i < _prices.length; i++) {
        for (let x = 0; x < value.length; x++) {
          // console.log(value[x]['price']);
          if (_prices[i] === value[x]['price']){
            products.push(value[x]);
          }
        }
      }

      // console.log(products);

      return products;
    }

    return value;
  }

}
