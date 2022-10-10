import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineshoppingComponent } from './onlineshopping/onlineshopping.component';
import { MenComponent } from './men/men.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WomenComponent } from './women/women.component';
import { AddtocartComponent } from './addtocart/addtocart.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineshoppingComponent,
    MenComponent,
    NavbarComponent,
    WomenComponent,
    AddtocartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
