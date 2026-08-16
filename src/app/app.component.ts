import { Component } from '@angular/core';
//import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'name-root',
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
