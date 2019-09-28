import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../store/models/cart';
import { Store } from '@ngrx/store';
import { State } from '../../store/store.reducer';
import { ProductRemovedFromCart } from '../../store/store.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: Item;
  
  constructor(private _store: Store<State>) { }

  ngOnInit() {
  }

  public removeItemFromCart(item: Item): void {
    this._store.dispatch(new ProductRemovedFromCart(item));
  }

}
