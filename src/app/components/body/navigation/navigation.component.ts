import { Component } from '@angular/core';
import { NavigationService } from './avigationService';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
sidebarVisible: any;
  constructor(public navigationService: NavigationService) { }
}
