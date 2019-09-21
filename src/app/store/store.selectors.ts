import { createSelector, createFeatureSelector } from '@ngrx/store';

import { initialState, State } from '../store/store.reducer';

export interface AppState {
    storeState: State
}

export const getStoreState = createFeatureSelector<State>('storeStore');

export const getInventory = createSelector(getStoreState, (state: State) => state.inventory);
// export const IsProductInStock = createSelector(getInventory, inventory => inventory.forEach(product => product.numberInStock > 0))


export const getCart = createSelector(getStoreState, (state: State) => state.cart);
export const numberOfItemsInCart = createSelector(getCart, cart => cart.items.reduce((acc, curr) => acc + curr.quantity, 0));
export const itemsInCart = createSelector(getCart, cart => cart.items);