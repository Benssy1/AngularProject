import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms'
import {DateService} from  '../date.service'

@Component({

  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private fb: FormBuilder,private ds:DateService) {

  }
  profileForm = this.fb.group({
    fname: ['', [Validators.minLength(2), Validators.required]],
    lname: ['', [Validators.minLength(3), Validators.required]],
    email: ['',[Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'),Validators.required]],
    address: this.fb.group({
      city: ['',Validators.required],
      houseno: ['',Validators.required],
      landmark: ['',Validators.required]

    })
  })

  save() {
    console.log(this.profileForm.value)
  }
  ngOnInit(): void {
console.log("from orders component",this.ds.getDate())
  }
}


