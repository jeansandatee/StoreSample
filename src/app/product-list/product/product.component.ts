import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Product } from '../../store/models/product';
import { Store } from '@ngrx/store';
import { State } from '../../store/store.reducer';
import { ProductAddedToCart } from '../../store/store.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { isInStock } from '../../store/store.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  public isInStock: boolean;

  private _ngUnsubscribe$: Subject<void> = new Subject<void>();


  constructor(private _store: Store<State>) { }

  ngOnInit(): void {
    this._store.select(isInStock, { name: this.product.name })
      .pipe(takeUntil(this._ngUnsubscribe$))
      .subscribe(isInStock => {
        this.isInStock = isInStock;
      });
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }

  public addProductToCart(product: Product): void {
    this._store.dispatch(new ProductAddedToCart(product));
  }
}
