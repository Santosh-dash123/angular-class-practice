import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() products: any;

  @Input() cartProducts: any[] = [];

  @Output() addToCartEvent = new EventEmitter<any>();
  // cartProducts: any[] = [];
  addToCart(product: any) {
    // this.cartProducts.push(product);
    // console.log(this.cartProducts);
    this.addToCartEvent.emit(product);
  }

  isProductInCart(productId: number): boolean {
    return this.cartProducts.some((x) => x.id === productId);
  }

  @Input() name: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'Changes made in parent componet : ' + changes['name'].currentValue,
    );
  }
}
