import { Product } from "./Product"

export interface ProductCart extends Product {
    quantity: number
}

export interface Cart {
    products: ProductCart[]
}