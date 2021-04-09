import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
  


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl ="http://127.0.0.1:8000";
  private loginUrl ="http://127.0.0.1:8000/login";

  constructor(private http:HttpClient) { }

 
   login(username: string,password: string){
    let data = { username: username, password: password }  
    return this.http.post(this.loginUrl,data);
    
  }
   
  Register(first_name:any,last_name:any,username:any,email:any,password:any):Observable<any>{
    let data={first_name:first_name,last_name:last_name,username:username,email:email,password:password}
  return this.http.post(this.registerUrl+ '/register/' ,data);
}



  logout(){
  localStorage.removeItem("currentUser");
}
}
