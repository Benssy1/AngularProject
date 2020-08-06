import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  // fname=new FormControl('benssy')
  
  profileForm=new FormGroup({   //creation of object
  
    fname:new FormControl(''),   //key value pairs
    lname:new FormControl(''),
    email:new FormControl(''),
   address:new FormGroup({
      
      city:new FormControl(""),
      houseno: new FormControl(""),
       landmark:new FormControl("")
  })
  })
    constructor() { }
  
    ngOnInit(): void {
    }
       save(){
     
    console.log(this.profileForm.value) //.value refers values of each object
  
   
  }}
