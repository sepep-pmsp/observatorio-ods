import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  offset: number = 0;

  ngOnInit(): void {
    const nomeQualquer = document.querySelector('.list') as HTMLElement;
    if (nomeQualquer) {
      this.offset = nomeQualquer.offsetTop;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const nomeQualquer = document.querySelector('.list') as HTMLElement;
    if (nomeQualquer) {
      if (window.scrollY >= this.offset) {
        nomeQualquer.classList.add('sticky');
      } else {
        nomeQualquer.classList.remove('sticky');
      }
    }
  }
}
