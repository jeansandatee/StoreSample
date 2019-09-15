import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {

  public products: {numberOnHand: number, name: string, description: string}[] = [{
    numberOnHand: 0,
    name: 'Chew Toy',
    description: 'dogs love \'em'
  }, {
    numberOnHand: 4,
    name: 'Leash',
    description: 'it holds your puppo'
  }, {
    numberOnHand: 3,
    name: 'Brush',
    description: 'makes your doggos coat so shiny'
  }];
  constructor() { }

  ngOnInit() {
  }

}
