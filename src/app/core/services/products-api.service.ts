import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsModel} from "@shared/models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ProductsModel[]>('https://api.myjson.com/bins/t3y4n');
  }

}
