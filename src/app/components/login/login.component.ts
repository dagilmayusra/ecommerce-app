import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {
  loginModel: Login;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
      
    })
  }

  login(){
    if(this.loginForm.valid){
      this.loginModel=Object.assign({},this.loginForm.value)
    }
    this.authService.loginMember(this.loginModel).subscribe(data=>{
        // if(data.length>0) {
        //   localStorage.setItem("token","ali")
        //  // localStorage.setItem("token", "jfjskbjsb123fsjbfs")
        //   this.messageService.add({
        //     severity:'success',
        //     summary:' Login successful',
        //   })
        //   this.router.navigate(['productList']);
        // }
        // else {
        //   this.messageService.add({
        //     severity:'error',
        //     summary:'Email or password is wrong!',
        //   })
        // }

    })
  }
}
