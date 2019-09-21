import { Product } from './models/product';
import { Cart } from './models/cart';
import { StoreActionsUnion, StoreActionTypes } from './store.actions';

export interface State {
    inventory: Product[]; // the products in the store
    cart: Cart; // user's cart
};

export const initialState: State = {
    inventory: [{
        numberInStock: 0,
        name: 'Chew Toy',
        description: 'dogs love \'em',
        imagePath: 'assets/images/chew-toy.jpg'
      }, {
        numberInStock: 4,
        name: 'Leash',
        description: 'it holds your puppo',
        imagePath: 'assets/images/leash.jpg'
      }, {
        numberInStock: 3,
        name: 'Shampoo',
        description: 'makes your doggos coat so shiny',
        imagePath: 'assets/images/dog-bath.jpg'
      }],
    cart: {
        items: []
    }
};

export function reducer(state = initialState, action: StoreActionsUnion): State {
    switch (action.type) {
        case StoreActionTypes.PRODUCT_ADDED_TO_CART:
            // find item in the cart that matches the incoming product if applicable
            let item = state.cart.items.find(item => item.name === action.product.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.items.push({
                    quantity: 1,
                    name: action.product.name,
                    description: action.product.description
                });
            }

            // edit the numer of products available in the inventory
            let itemAdded = state.inventory.find(product => product.name === action.product.name);
            itemAdded.numberInStock -= 1;

            return state;

        case StoreActionTypes.PRODUCT_REMOVED_FROM_CART:
            // find the item in the cart that matches the product that's being removed
            let indexOfItemBeingRemoved = state.cart.items.findIndex(item => item.name === action.item.name);
            state.cart.items.splice(indexOfItemBeingRemoved, 1);

            // edit the numer of products available in the inventory
            let itemRemoved = state.inventory.find(product => product.name === action.item.name);
            itemRemoved.numberInStock += 1;

            return state;
    }
    return state;
};
