import { BasketService } from './../../services/basket.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[] =[]
  products:Product; 

  searchText:string='';

  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private basketService: BasketService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      if(param["categoryId"]){
        this.getProduct(parseInt(param["categoryId"]))
      }
      else{
        this.getProduct(13)
      }
    })
  }

  getProduct(id:number){
    this.productService.getProducts(id).subscribe(data=>{
      this.productList=data.Result.ProductList;
    })
  }

  onSearchTextChanged(searchValue:string){
    this.searchText= searchValue;
    //console.log(this.searchText);
  }

  addToCart(product){
    alert("sepete eklendi" + product.DisplayName);
  }


}