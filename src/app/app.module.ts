import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { PdfViewerModule } from 'ng2-pdf-viewer';

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
import { SearchIndicatorsComponent } from './components/indicators/search-indicators/search-indicators.component';
import { CardIndicatorsComponent } from './components/indicators/card-indicators/card-indicators.component';
import { GraficIndicatorsComponent } from './components/indicators/grafic-indicators/grafic-indicators.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { AboutComponent } from './pages/about/about.component';

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
    SearchIndicatorsComponent,
    CardIndicatorsComponent,
    GraficIndicatorsComponent,
    AgendaComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CardModule,
    FormsModule,
    ChartModule,
    SidebarModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
