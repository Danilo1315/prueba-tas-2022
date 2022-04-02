import { Component } from '@angular/core';
import { ListProducts } from '../modelos/listproducts.interface';
import { ApiService } from '../services/api.services';

@Component({
  templateUrl: 'store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  products:ListProducts[];
  filteredString:string = '';
  FilteredPrice:string = '';
  FilteredCat:string = '';

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(data => {
      console.log(data)
      this.products = data;
    })
  }

}
