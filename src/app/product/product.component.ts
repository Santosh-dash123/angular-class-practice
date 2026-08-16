import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // products = [
  //   { name: 'Laptop', price: 65000, inStock: true },
  //   { name: 'Mouse', price: 750, inStock: false },
  //   { name: 'Keyboard', price: 1500, inStock: true },
  //   { name: 'TV', price: 8700, inStock: false },
  // ];
  // marks = 27;
  // inStock = false;
  // toggleStock() {
  //   this.inStock = !this.inStock;
  // }
  // isLoggedIn = true;
  // userName = 'Raki';
  // employees = [
  //   {
  //     id: 1,
  //     name: 'Rahul',
  //     department: 'HR',
  //   },
  //   {
  //     id: 2,
  //     name: 'Santosh Dash',
  //     department: 'IT',
  //   },
  //   {
  //     id: 3,
  //     name: 'Dinesh Mohanty',
  //     department: 'Finance',
  //   },
  // ];
  // editEmployee(id: number) {
  //   alert('Edited Employee!' + id);
  // }
  // deleteEmployee(id: number) {
  //   alert('Deleted Employee!' + id);
  // }

  grade = 'G';
}
