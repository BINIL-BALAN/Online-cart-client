import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { WishListComponent } from './wish-list/wish-list.component';
// import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: AllProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent
  },
  {
    path: 'view-product/:id',
    component: ViewProductComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
