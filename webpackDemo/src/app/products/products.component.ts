import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loading = false;
  products: Product[];
  prod: Product = new Product;
  fileName: String ;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private productService: ProductService, private http: HttpClient) {
}

  ngOnInit() {
     this.getProducts();
  }

  getProducts(): void {
  this.products = [];
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  fileEvent(event){
    // tslint:disable-next-line:prefer-const
    let file = event.target.files[0];
    // tslint:disable-next-line:prefer-const
    this.fileName = file.name;
    debugger;
    this.prod.imagePath = '../../../assets/img/' + (this.fileName);
    console.log(this.fileName);
}
  add(productName: string): void {
    this.prod.productPrice = 10000;
    this.prod.productName = productName;
    productName = productName.trim();
    if (!productName) { return; }
    debugger;
    this.productService.addProduct(this.prod)
      .subscribe(product => {
        this.products.push(product);
      });
  }
/*   onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type
         // value: reader.result.split(',')[1]
        });
      };
    }
  } */

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

}

