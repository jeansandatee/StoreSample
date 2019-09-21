import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../store/models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: Item;
  
  constructor() { }

  ngOnInit() {
  }

}
