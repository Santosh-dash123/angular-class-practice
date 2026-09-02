import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { MasterService } from '../master.service';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-service',
  imports: [],
  providers: [ProductService],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent implements OnInit {
  product: Product[] = [];

  // constructor(private masterService: MasterService) {}
  //constructor(private productService: ProductService){}
  productdata = inject(ProductService);

  ngOnInit(): void {
    this.product = this.productdata.getProducts();
  }
}
