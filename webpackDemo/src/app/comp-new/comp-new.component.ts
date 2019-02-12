import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterPipe } from 'ngx-filter-pipe';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comp-new',
  templateUrl: './comp-new.component.html',
  styleUrls: ['./comp-new.component.css']
})
export class CompNewComponent implements OnInit {
  products: Product[];
  userFilter: any = { productName: '' };
  users: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }];
  constructor(private filterPipe: FilterPipe,
    private productService: ProductService,
    private http:HttpClient) {
    console.log(filterPipe.transform(this.products, { productName: 'A' }));
  }
  ngOnInit() {

    this.getProducts();
  }
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

}
