import { ProductCart } from "../../Models/Cart";
import { Product } from "../../Models/Product";

export enum ActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    DELETE_TO_CART = "DELETE_TO_CART",
    UPDATE_QUANTITY_UP = "UPDATE_QUANTITY_UP",
    UPDATE_QUANTITY_DOWN = "UPDATE_QUANTITY_DOWN"
}


export function AddItemToCart(newProduct: ProductCart) {

    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            newProduct,
        }
    }
}

export function DeleteItemToCart(id: number) {
    return {
        type: ActionTypes.DELETE_TO_CART,
        payload: {
            id,
        }
    }
}

export function UpdateQuantityUP(id: number) {
    return {
        type: ActionTypes.UPDATE_QUANTITY_UP,
        payload: {
            id,
        }
    }
}
export function UpdateQuantityDown(id: number) {
    return {
        type: ActionTypes.UPDATE_QUANTITY_DOWN,
        payload: {
            id,
        }
    }
}