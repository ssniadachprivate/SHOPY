import { Component, OnInit } from '@angular/core';
import {ProductsModel} from "@shared/models/products.model";
import {Store} from "@ngrx/store";
import * as productActions from "@core/state/products/products.actions";

@Component({
  selector: 'app-cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.scss']
})
export class CartBoxComponent implements OnInit {

  cart: ProductsModel[] = [];

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.store.dispatch(new productActions.LoadProducts());
    this.store.subscribe(state => {
      this.cart = state.products.cart;
    })
  }

}
