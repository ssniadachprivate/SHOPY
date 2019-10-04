import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ProductsModel} from "@shared/models/products.model";
import {ProductsApiService} from "@core/services/products-api.service";

import * as productActions from "@core/state/products/products.actions";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: ProductsModel[] = [];

  constructor(private store: Store<any>,
              private serv: ProductsApiService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  /**
   * Get all products
   */
  getProducts() {
    this.store.pipe(select('products')).subscribe(resp => {
      this.products = resp.products;
    });
  }

}
