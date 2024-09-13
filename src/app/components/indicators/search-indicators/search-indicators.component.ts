import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-indicators',
  templateUrl: './search-indicators.component.html',
  styleUrl: './search-indicators.component.css'
})
export class SearchIndicatorsComponent {

  @Output() filteredData: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchText = input.value.trim().toLowerCase();
    this.filteredData.emit(searchText);
  }
}
