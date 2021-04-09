import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  isloginError : boolean = false;
  constructor(private authService:AuthService,private router:Router) { }

  username:any
  password:any
  result:any
  
  ngOnInit(): void {

  }

authlogin(){
  console.log("hi");
  this.authService.login(this.username,this.password).subscribe((data:any)=>{
    // localStorage.setItem('userToken',data.access_token);
    this.result=data;
    if(this.result.length>0)
     this.router.navigateByUrl("");
    else
     alert("Invalid user")
    })
  
  
}
 
  

}
