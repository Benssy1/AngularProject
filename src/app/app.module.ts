import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SampleComponent } from './sample/sample.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import{FormsModule} from '@angular/forms';
import { ProductentryComponent } from './productentry/productentry.component'



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SampleComponent,
    ProductentryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
