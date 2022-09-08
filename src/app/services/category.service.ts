import { result } from './../models/resul';
import { response } from './../models/response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<response<result<Category[]>>>{    
    return this.httpClient.get<response<result<Category[]>>>("https://store.vrunibex.com/mobile2/mbProduct/CategoryList")
  }
}
