import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'destaque', component: HighlightsComponent },
  { path: 'agenda-2030', component: AgendaComponent },
  { path: 'sobre-a-ods', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
