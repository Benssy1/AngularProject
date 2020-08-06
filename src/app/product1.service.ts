import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Product1Service {
 mycart:any=[]
  constructor( private _http:HttpClient) {
    
   }
   getData(){
     return this._http.get("http://localhost:4200/assets/cart.json")
   }
}

