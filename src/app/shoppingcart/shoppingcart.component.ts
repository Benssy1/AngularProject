import { Component, OnInit } from '@angular/core';
import {Product1Service  } from '../product1.service'


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private obj: Product1Service) { }
  
 
  list: any = [];
  ngOnInit(): void {
    
  
    this.obj.getData().subscribe((x) => {   // OBSERVABLE STREAM
      
  
      this.list = x
     console.log("array", this.list)

    })
    // console.log("array js",this.list)

  }

  addtocart(p)
  {
    this.obj.mycart.push(p)
    console.log(this.obj.mycart)
  }

}
