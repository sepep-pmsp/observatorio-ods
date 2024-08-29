import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-indicators',
  templateUrl: './card-indicators.component.html',
  styleUrls: ['./card-indicators.component.css']
})
export class CardIndicatorsComponent {
  @Input() dados: any[] = [];
  @Input() cor: string | null = null;

  @Input() unidadeSelecionada: string = ''; 
  @Input() selecaoOpcao: string = '';

 getColor(nm_indicador: string): string {
    return this.cor ? this.cor : '#E5233D';
  }

  getImagePath(nm_indicador: string): string {
    const prefix = nm_indicador.split('.')[0];
    return `assets/img/${prefix}.png`;
  }
}
