import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  //count = 0; //Normal variable

  //Signal Variable
  count = signal(0);

  setCount() {
    this.count.set(100);
  }

  increaseCount() {
    this.count.update((x) => x + 1);
  }

  decreaseCount() {
    this.count.update((x) => x - 1);
  }

  resetCount() {
    this.count.set(0);
  }
}
