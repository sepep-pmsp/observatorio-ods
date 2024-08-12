import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-item',
  templateUrl: './highlight-item.component.html',
  styleUrl: './highlight-item.component.css'
})
export class HighlightItemComponent {
  @Input() highlight: { imageUrl: string, title: string, description: string, link: string } = {
    imageUrl: '',
    title: '',
    description: '',
    link: ''
  };

}
