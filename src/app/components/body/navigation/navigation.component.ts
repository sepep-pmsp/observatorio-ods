import { Component, Inject } from '@angular/core';
import { NavigationService } from './navigationService';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
sidebarVisible: any;
constructor(@Inject(NavigationService) public navigationService: NavigationService) { }
}
