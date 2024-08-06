import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './pages/header/header/header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule, 
    AppRoutingModule, 
    HeaderComponent,
  ]
})
export class AppModule { }
