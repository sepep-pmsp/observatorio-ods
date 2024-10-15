import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent{

  showScrollTop = false; 
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollTop = scrollPosition > 100; 
  }

  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}