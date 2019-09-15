import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {

  @Input() product: any;
  public isInStock: boolean;


  constructor() { }

  ngOnInit() {
    this.isInStock = this.product.numberOnHand !== 0;
  }

}
