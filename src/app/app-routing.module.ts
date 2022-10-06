import { RegisterComponent } from './components/register/register.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductListComponent},
  {path:"categoryList", component:CategoryListComponent},
  {path:"productList", component:ProductListComponent},
  {path:"productList/:categoryId", component:ProductListComponent},
  {path:"productDetail/:id", component:ProductDetailComponent},
  // {path:"productDetail/:productId", component:ProductDetailComponent}
  {path:"login",component:LoginComponent},
  {path:"register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
