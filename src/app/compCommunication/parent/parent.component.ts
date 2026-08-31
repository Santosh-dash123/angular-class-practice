import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  products = [
    { id: 101, name: 'AC', price: 35000, brand: 'LG' },
    { id: 102, name: 'Refrigerator', price: 28000, brand: 'Samsung' },
    { id: 103, name: 'Washing Machine', price: 22000, brand: 'Whirlpool' },
    { id: 104, name: 'Smart TV', price: 45000, brand: 'Sony' },
    { id: 105, name: 'Microwave Oven', price: 12000, brand: 'IFB' },
    { id: 106, name: 'Water Purifier', price: 15000, brand: 'Kent' },
    { id: 107, name: 'Fan', price: 2700, brand: 'Usha' },
  ];

  cartProducts: any[] = [];
  addToCart(product: any) {
    const productAlreadyAddedToCart = this.cartProducts.some(
      (x) => x.id === product.id,
    );
    if (productAlreadyAddedToCart) {
      return true;
    } else {
      this.cartProducts.push(product);
    }
    return false;
  }

  userName: string = 'Santosh Dash';
  changeName(): void {
    this.userName = 'Binayak';
  }
}
