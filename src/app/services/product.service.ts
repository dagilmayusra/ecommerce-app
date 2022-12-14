import { Detail } from './../models/Detail';
import { Product } from './../models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultProduct } from '../models/result-product';
import { response } from '../models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // [x: string]: any;

  constructor(private httpClient:HttpClient) { }

  getProducts(id:number):Observable<response<ResultProduct<Product[]>>>{    
    return this.httpClient.get<response<ResultProduct<Product[]>>>(`https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${id}`)
  }

  getProductById(id:number):Observable<response<Detail>>{
    return this.httpClient.get<response<Detail>>(`https://store.vrunibex.com/mobile2/mbProduct/ProductDetail?productId=${id}`)
  }

  
}


