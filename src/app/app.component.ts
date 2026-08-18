import { Component } from '@angular/core';
// import { HomeComponent } from './routing/home/home.component';
//import { LoginComponent } from './login/login.component';
// import { ProductComponent } from './product/product.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'name-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
