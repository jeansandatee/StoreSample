import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/store.reducer';
import { Product } from '../store/models/product';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getInventory } from '../store/store.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public productsFromStore$: Observable<Product[]> = this._store.pipe(select(getInventory)) 
  
  private _destroySubject$: Subject<void> = new Subject<void>();

  constructor(private _store: Store<State>) { }

  ngOnInit() {
      // this.productsFromStore$ = this._store.select(getInventory)
      //   .pipe(
      //     takeUntil(this._destroySubject$)
      //   );
   }

   ngOnDestroy() {
     this._destroySubject$.next();
     this._destroySubject$.complete();
   }
}
