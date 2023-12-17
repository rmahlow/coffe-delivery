import { TypePayment } from './TypePayment';
import { Client } from "./Client";
import { Product } from "./Product";

export interface Checkout {
    client:Client,
    products:Product[],
    typePayment:TypePayment

}