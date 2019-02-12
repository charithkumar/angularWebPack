import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';


import { Observable, Subject } from 'rxjs';
import { FilterPipe } from 'ngx-filter-pipe';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { OutputType } from '@angular/core/src/view';
import { isEmpty } from 'rxjs/internal/operators/isEmpty';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  @Input() product: Product;
  private route: ActivatedRoute;
  products: Product[];

  public isSearch = false;
  userFilter: any = { productName: '' };

  users: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }];
  constructor(private filterPipe: FilterPipe,
    private productService: ProductService, private router: Router,
    private http: HttpClient) {
    console.log(filterPipe.transform(this.products, { productName: 'A' }));
  }

  @ViewChild(ProductDetailComponent)
  productDetailComponent: ProductDetailComponent;

  ngOnInit() {
    this.getProducts();
  }

   getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

/*   this.products = [];

  this.productService.getProducts().subscribe((data => {
    console.log(data.json());
  })); */
  /* .subscribe(products => this.products = products); */

  valuechange(newValue) {
    this.isSearch = false;

  }
  search() {
    this.isSearch = true;
    if (this.userFilter.productName === (null || '')) {
      this.isSearch = false;
    }
  }

  setEvent() {
    this.productDetailComponent.ngOnInit();
  }

}
