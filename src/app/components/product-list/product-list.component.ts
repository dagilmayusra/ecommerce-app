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

  constructor(private productService:ProductService,
    private route:ActivatedRoute
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

}
