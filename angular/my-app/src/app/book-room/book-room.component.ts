import { Component} from '@angular/core';
import {HomeService} from '../home.service'

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss'],
  providers: [HomeService]
})
export class BookRoomComponent {
alert:boolean=false
alert1:boolean=false

  
    rooms = [{bed_type:''}];
    firstname:any
    lastname:any
    address:any
    phone:any
    book_from:any
    book_till:any
    persons:any
    bed_type:any

  constructor(private api:HomeService) { 
    this.getRooms();
  }
  getRooms = () => { 
    this.api.getAllRooms().subscribe(
      data => {
        this.rooms = data;
      },
      error => {
      console.log(error);
      }
    )
  }
  bookroom () {
     this.api.setroom(this.firstname, this.lastname,this.address,this.phone,this.book_from,this.book_till,this.persons,this.bed_type).subscribe((data:any)=>{
          this.alert=true,
          (error:any)=>this.alert1=true
     }
     )
     
  }
closeAlert(){
  this.alert=false
}
closeAlert1(){
  this.alert1=false
}
}
