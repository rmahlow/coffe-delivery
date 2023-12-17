import { produce } from "immer";
import { Cart } from "../../Models/Cart";
import { ActionTypes } from "./actions";

interface CartState {
    cart: Cart
}

export function CartReducer(state: CartState, action: any) {
    console.log(state);
    switch (action.type) {
        case ActionTypes.ADD_TO_CART: {

            const productToAdd = state.cart?.products.findIndex(product => {
                return product.id === action.payload.newProduct.id
            });

            if (productToAdd < 0) {
                return produce(state, draft => {
                    draft.cart.products.push(action.payload.newProduct)
                });
            } else {
                return produce(state, draft => {
                    var quantity = draft.cart.products[productToAdd].quantity;
                    draft.cart.products[productToAdd].quantity = quantity + action.payload.newProduct.quantity
                })
                
            }


        }
        case ActionTypes.DELETE_TO_CART: {
            const productToDeleteIndex = state.cart?.products.findIndex(product => {
                return product.id === action.payload.id
            });

            if (!productToDeleteIndex || productToDeleteIndex < 0) return state;

            return produce(state, draft => {
                draft.cart.products.slice(productToDeleteIndex, 1);
            })
        }
        case ActionTypes.UPDATE_QUANTITY_UP: {
            const productToUpdateIndex = state.cart?.products.findIndex(product => {
                return product.id === action.payload.id
            });

            if (!productToUpdateIndex || productToUpdateIndex < 0) return state;

            return produce(state, draft => {
                if (draft.cart.products[productToUpdateIndex])
                    draft.cart.products[productToUpdateIndex].quantity = draft.cart.products[productToUpdateIndex].quantity + 1;
            })
        }

        case ActionTypes.UPDATE_QUANTITY_DOWN: {
            const productToUpdateIndex = state.cart.products.findIndex(product => {
                return product.id === action.payload.id
            });

            if (!productToUpdateIndex || productToUpdateIndex < 0) return state;

            return produce(state, draft => {
                if (draft.cart.products[productToUpdateIndex])
                    draft.cart.products[productToUpdateIndex].quantity = draft.cart.products[productToUpdateIndex].quantity - 1;
            })
        }
    }

    return state;
}