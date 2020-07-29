import { Component, OnInit } from '@angular/core';
import {Product} from '../product'

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {
  model:Product
  constructor() {
    console.log("constuctor...")
   }

  ngOnInit(): void {
    //console.log("init function")
    this.model=new Product("","",89)
  }
save()

{
console.log("function caled")
console.log(this.model)
}
}
