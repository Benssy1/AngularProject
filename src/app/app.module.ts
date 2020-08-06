import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SampleComponent } from './sample/sample.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import{FormsModule} from '@angular/forms';
import { ProductentryComponent } from './productentry/productentry.component';
import { NameEditorComponent } from './name-editor/name-editor.component'
import{ReactiveFormsModule}from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { ProductlistComponent } from './productlist/productlist.component'
import{HttpClientModule}from '@angular/common/http';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ShowcartComponent } from './showcart/showcart.component'
import{TestModule}from './test/test.module'
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import{MatButtonModule}from '@angular/material/button';
import{MatSliderModule}from '@angular/material/slider';
import{MatDatepickerModule}from '@angular/material/datepicker';
import{MatNativeDateModule}from '@angular/material/core';
import{MatInputModule}from '@angular/material/input';
import{MatListModule}from'@angular/material/list';
import { AnimateComponent } from './animate/animate.component';




@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SampleComponent,
    ProductentryComponent,
    NameEditorComponent,
    OrdersComponent,
    ProductlistComponent,
    ShoppingcartComponent,
    ShowcartComponent,
    AnimateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TestModule,
    MatButtonModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
