import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path:"", pathMatch:"full", component:ProductListComponent},
  {path:"productList", component:ProductListComponent},
  {path:"productList/:categoryId", component:ProductListComponent},
  {path:"productDetail", component:ProductDetailComponent},
  // {path:"productDetail/:productId", component:ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
