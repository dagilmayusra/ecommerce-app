import { Basket } from './../models/basket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(
    private httpClient:HttpClient
  ) { }

  addToCart(basket: Basket):Observable<Basket>{
    return this.httpClient.get<Basket>(`https://www.vestel.com.tr/mobile2/mbOrder/AddToCart?VariantID=${basket.VariantID}&quantity=${basket.quantity}`)
  }

  removeFromCart(){
    
  }

}
