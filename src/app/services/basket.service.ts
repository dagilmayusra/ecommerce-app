import { Attribute } from './../models/Attribute';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(
    private httpClient:HttpClient
  ) { }

  get(){
    //const observable: Observable<Product<Attribute>>
  }
}
