import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  user:any;

  constructor(
    private authService: AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){

    const loginObserver={
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    };
    this.authService.login(f.value).subscribe(loginObserver);
  }

}
