import { Action } from '@ngrx/store';
import { Product } from './models/product';
import { Item } from './models/cart';

export enum StoreActionTypes {
    PRODUCT_ADDED_TO_CART = '[Product Component] Product added to cart',
    PRODUCT_REMOVED_FROM_CART = '[Cart Component] Product removed from cart'
}

export class ProductAddedToCart implements Action {
    public readonly type = StoreActionTypes.PRODUCT_ADDED_TO_CART;

    constructor(public product: Product) { }
}

export class ProductRemovedFromCart implements Action {
    public readonly type = StoreActionTypes.PRODUCT_REMOVED_FROM_CART;

    constructor(public item: Item) { }
}

export type StoreActionsUnion
    = ProductAddedToCart
    | ProductRemovedFromCart;