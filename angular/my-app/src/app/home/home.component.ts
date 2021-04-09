import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent{

    booking=[{first_name:'titanic'},{first_name:'avatar'}];
   constructor(private api:HomeService){
     this.getUsers();
   }
  getUsers = () => { 
    this.api.getAllUsers().subscribe(
      data => {
        this.booking = data;
      },
      error => {
      console.log(error);
      }
    )
  }

}
