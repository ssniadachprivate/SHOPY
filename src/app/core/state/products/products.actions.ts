import {Action, createAction} from "@ngrx/store";
import {ProductsModel} from "@shared/models/products.model";


export enum ActionTypes {
  LOAD_PRODUCTS = '[Products] Load products from server',
  LOAD_PRODUCTS_SUCCESS = '[Products] Load products success',
  ADD_TO_CART = '[Products] add to cart'
}

export class LoadProducts implements Action {
  readonly type = ActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
  readonly type = ActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload:  ProductsModel[]) {}
}

export class AddToCart implements Action {
  readonly type = ActionTypes.ADD_TO_CART;

  constructor(public payload: ProductsModel) {}
}

// export class LoadProductsFail implements Action {
//   readonly type = ActionTypes.LOAD_PRODUCTS_FAIL;
//
//   constructor(public payload: string) {}
// }



export type ProductActions = LoadProducts | LoadProductsSuccess | AddToCart;
