import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../store/models/product';
import { Store } from '@ngrx/store';
import { State } from '../../store/store.reducer';
import { ProductAddedToCart } from '../../store/store.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit/*, OnChanges*/ {

  @Input() product: Product;
  public isInStock: boolean;


  constructor(private _store: Store<State>) { }

  ngOnInit(): void {
    this.isInStock = this.product.numberInStock !== 0;
  }

  /*ngOnChanges(changes: SimpleChanges): void {
    if (changes.product) {
      const { currentValue, previousValue } = changes.product;

      if (currentValue !== previousValue) {
        this.isInStock = currentValue.numberInStock !== 0;
      }
    }
  }*/ // I might still need this.. ?

  public addProductToCart(product: Product): void {
    this._store.dispatch(new ProductAddedToCart(product));
  }
}
