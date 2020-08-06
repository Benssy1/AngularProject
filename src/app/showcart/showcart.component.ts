import { Component, OnInit } from '@angular/core';
import {Product1Service  } from '../product1.service'

@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {
  mycartitems:any=[]

  constructor(private obj:Product1Service) { }
 
  ngOnInit(): void {
    this.mycartitems=this.obj.mycart
  }

}
