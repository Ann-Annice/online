import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineshoppingComponent } from './onlineshopping/onlineshopping.component';
import { MenComponent } from './men/men.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineshoppingComponent,
    MenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
