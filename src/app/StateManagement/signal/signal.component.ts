import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-signal',
  imports: [CurrencyPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  // //Signal Example
  //count = 0; //Normal variable
  //Signal Variable
  // count = signal(0);
  // setCount() {
  //   this.count.set(100);
  // }
  // increaseCount() {
  //   this.count.update((x) => x + 1);
  // }
  // decreaseCount() {
  //   this.count.update((x) => x - 1);
  // }
  // resetCount() {
  //   this.count.set(0);
  // }
  // isLoggedIn = signal(false);
  // login() {
  //   this.isLoggedIn.set(true);
  // }
  // logout() {
  //   this.isLoggedIn.set(false);
  // }
  //Computed Example

  // count = signal(10);

  // doubleCount = computed(() => {
  //   return this.count() * 2;
  // });

  // increaseCount() {
  //   this.count.update((x) => x + 1);
  // }

  // productPrice = signal(500);

  // quantity = signal(2);

  // totalPrice = computed(() => {
  //   return this.productPrice() * this.quantity();
  // });

  // increaseQuantity() {
  //   this.quantity.update((value) => value + 1);
  // }

  // decreaseQuantity() {
  //   if (this.quantity() > 1) {
  //     this.quantity.update((value) => value - 1);
  //   }
  // }

  employees = signal([
    { name: 'Rahul', isActive: false },
    { name: 'Santosh', isActive: true },
    { name: 'trupti', isActive: true },
  ]);

  activeEmployees = computed(() => {
    return this.employees().filter((employee) => employee.isActive);
  });
}
