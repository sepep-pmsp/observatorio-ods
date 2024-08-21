import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/body/home/home.component';
import { NavigationComponent } from './components/body/navigation/navigation.component';
import { NewsComponent } from './components/newsPage/news/news.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';
import { HighlightItemComponent } from './components/newsPage/highlight-item/highlight-item.component';
import { FooterComponent } from './components/body/footer/footer.component';
import { IndicadoresComponent } from './components/indicators/indicadores/indicadores.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NewsComponent,
    HighlightsComponent,
    HighlightItemComponent,
    FooterComponent,
    IndicadoresComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
