import { Component, OnInit } from '@angular/core';
import * as productActions from "@core/state/products/products.actions";
import {ProductsModel} from "@shared/models/products.model";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductsModel = null;
  public addedToCart: boolean = false;

  constructor(private store: Store<any>,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadCart();
  }

  /**
   * Get products from cart
   */
  loadCart() {
    this.store.pipe(select('products')).subscribe(resp => {
      resp.products.forEach(item => {
        if (item.id === Number(this.route.snapshot.params.id)) {
          this.product = item;
        }
      })
    })
  }

  /**
   * Add product to cart
   * @param product
   */
  addToCart(product: ProductsModel) {
    if (!this.addedToCart) {
      this.store.dispatch(new productActions.AddToCart(product));
      this.addedToCart = true;
    }
  }

}
