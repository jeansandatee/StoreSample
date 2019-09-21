import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/store.reducer';
import { Product } from '../store/models/product';
import { Observable, of } from 'rxjs';
import { getInventory } from '../store/store.selectors';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productsFromStore$: Observable<Product[]> = this._store.pipe(select(getInventory)) 
  
  constructor(private _store: Store<State>, private _sanitizer: DomSanitizer) { }

  ngOnInit() {

   }

}
