import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/store.reducer';
import { Cart, Item } from '../store/models/cart';
import { Observable } from 'rxjs';
import { getCart, numberOfItemsInCart, itemsInCart } from '../store/store.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart$: Observable<Cart> = this._store.pipe(select(getCart));
  public numberOfItemsInCart$: Observable<number> = this._store.pipe(select(numberOfItemsInCart));
  public itemsInCart$: Observable<Item[]> = this._store.pipe(select(itemsInCart));

  constructor(private _store: Store<State>) { }

  ngOnInit() {
  }

}
