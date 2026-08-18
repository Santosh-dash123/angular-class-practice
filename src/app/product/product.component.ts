import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { MaskedProductIdPipe } from '../masked-product-id.pipe';
@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    MaskedProductIdPipe,
  ],
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
  //marks = 10;
  // inStock = true;
  // toggleStock() {
  //   this.inStock = !this.inStock;
  // }
  // isLoggedIn = true;
  // userName = 'Binayak';
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
  // addEmployees() {
  //   this.employees.push({
  //     id: this.employees.length + 1,
  //     name: 'Trupti',
  //     department: 'Sales',
  //   });
  // }
  // editEmployee(id: number) {
  //   alert('Edited Employee!' + id);
  //   const employeesData = this.employees.find((x) => x.id == id);
  //   if (employeesData) {
  //     ((employeesData.department = 'Update Department'),
  //       (employeesData.name = 'Update Name'));
  //   } else {
  //     alert('Employee Not Found!');
  //   }
  // }
  // deleteEmployee(id: number) {
  //   alert('Deleted Employee!' + id);
  //   const deletedEmployeeList = this.employees.filter((x) => x.id != id);
  //   this.employees = deletedEmployeeList;
  // }
  // grade = 'HUIII';

  products = [
    {
      productName: 'TV',
      productDesc: 'This is a very goood TV',
      productPrice: 95000,
      productId: 'Product-86979-TV',
    },
    {
      productName: 'Laptop',
      productDesc: 'This is a very goood LAPTOP',
      productPrice: 75000,
      productId: 'Product-86979-Laptop',
    },
  ];
}
