import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[AuthService]
})
export class RegisterComponent  {
   alert:boolean=false
   alert1:boolean=false
    first_name:any
    last_name:any
    username:any
    email:any
    password:any
  
  constructor(private authservice:AuthService){

  }
  register () {
    this.authservice.Register(this.first_name,this.last_name,this.username,this.email,this.password).subscribe((data:any)=>{
         this.alert=true,
        (error:any)=>
        this.alert1=true
     })

  }
  closeAlert(){
    this.alert=false
  }
  closeAlert1(){
    this.alert1=false
  }
}
  

