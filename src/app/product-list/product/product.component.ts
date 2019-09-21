import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../store/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  public isInStock: boolean;


  constructor() { }

  ngOnInit() {
    this.isInStock = this.product.numberInStock !== 0;
  }

}
