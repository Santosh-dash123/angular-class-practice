import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() products: any;

  @Output() addToCartEvent = new EventEmitter<any>();
  // cartProducts: any[] = [];
  addToCart(product: any) {
    // this.cartProducts.push(product);
    // console.log(this.cartProducts);
    this.addToCartEvent.emit(product);
  }
}
