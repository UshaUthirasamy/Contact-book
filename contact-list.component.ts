import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { Console } from 'console';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contact:any=[];
  newcontact:any={};
  constructor() {
   }

  ngOnInit(): void {
    
  }

  addContact(name:string, email:string, phone:string,image:string) {
    this.newcontact= {
      name : name,
      email : email,
      phone_no : phone,
      image : image
    }
    this.contact.push(this.newcontact);
  }

}
