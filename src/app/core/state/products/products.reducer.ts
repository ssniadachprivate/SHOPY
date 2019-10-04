import {ActionTypes, ProductActions} from "@core/state/products/products.actions";

export const initialState = {
  products: [],
  cart: [],
};

export function ProductReducer(state = initialState, action: ProductActions) {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
      };
    case ActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...action.payload]
      };
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
}
