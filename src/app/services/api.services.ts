import { Injectable } from '@angular/core';
import { ListProducts } from '../modelos/listproducts.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/";

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<ListProducts[]>{
    let _dir = this.url + "products";

    return this.http.get<ListProducts[]>(_dir);
  }

}

