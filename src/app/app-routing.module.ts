import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { SampleComponent } from './sample/sample.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ShowcartComponent } from './showcart/showcart.component';


const routes: Routes = [{
  path:"home",
  component:CalculatorComponent
},{
  path:"test",
  component:SampleComponent
},
{
path:"pro",
component:ProductentryComponent
},
{
  path:"viewcart",
  component:ShowcartComponent
  },
{
  path:"ticket",
  component:NameEditorComponent
  },
  {
    path:"or",
    component:ProductlistComponent
    },
    {
      path:"shop",
      component:ShoppingcartComponent
      },
      
    
  
  {
    path:"ord",
    component:OrdersComponent
    }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
