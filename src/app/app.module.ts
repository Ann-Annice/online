import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineshoppingComponent } from './onlineshopping/onlineshopping.component';
import { MenComponent } from './men/men.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WomenComponent } from './women/women.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { BuyComponent } from './buy/buy.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
  {
    path:"",component:OnlineshoppingComponent
  },
  {
    path:"cart",component:AddtocartComponent
  },
 
  {
    path:"login",component:LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    OnlineshoppingComponent,
    MenComponent,
    NavbarComponent,
    WomenComponent,
    AddtocartComponent,
    BuyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
