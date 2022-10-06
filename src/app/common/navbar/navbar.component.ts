import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


import {MenuItem} from 'primeng/api';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];
  product:Product[]

  

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }

  logOut(){
    this.authService.logOut()
this.router.navigate(["login"])
  }

}
