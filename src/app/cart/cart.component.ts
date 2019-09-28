import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/store.reducer';
import { Cart, Item } from '../store/models/cart';
import { Observable, Subject } from 'rxjs';
import { getCart, numberOfItemsInCart, itemsInCart } from '../store/store.selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  public numberOfItemsInCart: number = 0;
  public itemsInCart: Item[] = [];
  private _ngUnsubscribe$: Subject<void> = new Subject<void>();

  constructor(private _store: Store<State>) { }

  ngOnInit(): void {
    this._store.select(numberOfItemsInCart)
      .pipe(takeUntil(this._ngUnsubscribe$))
      .subscribe(numberOfItemsInCart => {
        this.numberOfItemsInCart = numberOfItemsInCart;
      });

      this._store.select(itemsInCart)
      .pipe(takeUntil(this._ngUnsubscribe$))
      .subscribe(itemsInCart => {
        this.itemsInCart = itemsInCart;
      });
  }
  ngOnDestroy(): void {
    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }

}
