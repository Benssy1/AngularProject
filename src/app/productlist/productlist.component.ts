import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private obj: ProductService) { }
  list: any = [];
  ngOnInit(): void {
    this.obj.getData().subscribe((x) => {   // OBSERVABLE STREAM
      console.log("json array", x)
      this.list = x
      console.log("array", this.list)

    })
    // console.log("array js",this.list)

  }

}
