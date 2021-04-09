import { Injectable, Type } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
   
  baseUrl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }
   
  getAllUsers():Observable<any> {
  return this.http.get(this.baseUrl + '/users/',
  {headers:this.httpHeaders});
 }
  getAllRooms():Observable<any> {
   return this.http.get(this.baseUrl + '/rooms/',
   {headers:this.httpHeaders});
 }
  setroom(firstname: any,lastname: any,address: any,phone: any,book_from: any,book_till: any,persons: any,bed_type: any):Observable<any>{
   let data={firstname:firstname,lastname:lastname,address:address,phone:phone,book_from:book_from,book_till:book_till,persons:persons,bed_type:bed_type}
  return this.http.post(this.baseUrl + '/booking/',data,
  {headers:this.httpHeaders});
}
}