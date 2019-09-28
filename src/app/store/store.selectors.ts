import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../store/store.reducer';

export const getStoreState = createFeatureSelector<State>('storeStore');

export const getInventory = createSelector(getStoreState, (state: State) => state.inventory);
export const isInStock = createSelector(getInventory, (products, prarams) => {
    let product = products.find(product => product.name === prarams.name);
    return product.numberInStock !== 0;
});

export const getCart = createSelector(getStoreState, (state: State) => state.cart);
export const numberOfItemsInCart = createSelector(getStoreState, (state: State) => {
    let count = 0;
    state.cart.items.forEach(item => count += item.quantity);
    return count;
});
export const itemsInCart = createSelector(getStoreState, (state: State) => state.cart.items);