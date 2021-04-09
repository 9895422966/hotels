import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   roo= [
     {'id':1,'name':'single', 'image':'../../assets/single.jpg'},
     {'id':2,'name':'double', 'image':'../../assets/double.jpg'},
     {'id':3,'name':'triple', 'image':'../../assets/triple.jpg'},
     {'id':4,'name':'master', 'image':'../../assets/master.jpg'},
     {'id':5,'name':'familysuite', 'image':'../../assets/familysuite.jpg'}
     ]
}
