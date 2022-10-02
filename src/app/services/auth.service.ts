import { result } from './../models/resul';
import { response } from './../models/response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "https://www.vestel.com.tr/mobile2/mbUser/"

  constructor(
    private httpClient: HttpClient
  ) { }

  login(model: any){
    return this.httpClient.post('https://www.vestel.com.tr/mobile2/mbUser/Login?Email=' + model.email ,'&', model.password).pipe(
      map((response: any) =>{
        const user=response;
        if(user.result.succeded){
          localStorage.setItem('token', user.token);
        }
      })
    )
  }
}
