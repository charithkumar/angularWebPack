import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElectronicsComponent } from './electronics/electronics.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/electronics', pathMatch: 'full' },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'productDetails/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
