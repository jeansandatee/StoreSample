export interface Cart {
    // numberOfItems: number // number of items in the cart --> will be a selector
    items: Item[];
};

export interface Item {
    quantity: number; // number of this item that is in the cart
    name: string; // name of the item
    description: string; // longer description of the item
    imagePath: string; // path to the image
};