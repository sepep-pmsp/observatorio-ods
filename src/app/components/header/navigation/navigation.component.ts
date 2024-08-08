import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  offset: number = 0;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) { 
      const nomeQualquer = document.querySelector('.list') as HTMLElement;
      if (nomeQualquer) {
        this.offset = nomeQualquer.offsetTop;
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isBrowser) { 
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
}
