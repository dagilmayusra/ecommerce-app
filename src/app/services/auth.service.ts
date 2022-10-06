import { Register } from './../models/register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import {response} from "../models/response"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient:HttpClient
  ) { }

  loginMember(login: Login):Observable<response<Login>>{
    return this.httpClient.post<response<Login>>(`https://www.vestel.com.tr/mobile2/mbUser/Login?Email=${login.email}&Password=${login.password}`,{});
  }

  isLoggedIn():boolean{
    const token=localStorage.getItem("token");
    if(token){
      return true;
    }
    else{
      return false;
    }
  }

  registerMember(register: Register):Observable<response<null>>{
    let newPath= `https://www.vestel.com.tr/mobile2/mbUser/RegisterUser/?Main.Email=${register.email}&Main.FirstName=${register.firstName}&Main.LastName=${register.lastName}&Main.GenderID=${register.genderID}&Main.CellPhone=${register.cellPhone}&Main.Password=${register.password}&Main.Birthday=${register.birthday}`;
    return this.httpClient.post<response<null>>(newPath, {})
  }

  logOut(){
    localStorage.removeItem("token");
   
  }

}
