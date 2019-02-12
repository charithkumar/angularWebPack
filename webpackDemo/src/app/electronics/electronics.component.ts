import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './electronics.component.html',
  styleUrls: [ './electronics.component.css' ]
})
export class ElectronicsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.slice(0, 4));

 /*  this.http.get('http://localhost:8082/getAllProducts').subscribe(response => {
  console.log(response); */
}
}

