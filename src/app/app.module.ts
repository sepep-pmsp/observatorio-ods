import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule, 
    AppRoutingModule, 
    HeaderComponent,
    HttpClientModule,
    AppComponent,
  ],
  providers: [],
})
export class AppModule { }
