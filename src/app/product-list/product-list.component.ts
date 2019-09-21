import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: {numberOnHand: number, name: string, description: string, image: string}[] = [{
    numberOnHand: 0,
    name: 'Chew Toy',
    description: 'dogs love \'em',
    image: 'assets/images/chew-toy.jpg'
  }, {
    numberOnHand: 4,
    name: 'Leash',
    description: 'it holds your puppo',
    image: 'assets/images/leash.jpg'
  }, {
    numberOnHand: 3,
    name: 'Shampoo',
    description: 'makes your doggos coat so shiny',
    image: 'assets/images/dog-bath.jpg'
  }];
  
  constructor(_sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.products.forEach(product => {
      product.image = this._sanitizer.bypass
    });
  }

}
