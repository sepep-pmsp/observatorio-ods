import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { DadosService } from '../../../service/dados.service';

@Component({
  selector: 'app-card-indicators',
  templateUrl: './card-indicators.component.html',
  styleUrls: ['./card-indicators.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardIndicatorsComponent {
  @Input() dados: any[] = [];
  @Input() cor: string | null = null;
  @Input() unidadeSelecionada: string = ''; 
  @Input() selecaoOpcao: string = '';

  @Input() filtro: string = '';

  filteredDados: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dados'] || changes['filtro']) {
      this.applyFilter();
    }
  }

  applyFilter() {
    const filtroLower = this.filtro.toLowerCase();
    this.filteredDados = this.filtro
      ? this.dados.filter(item => 
          (item.nm_indicador?.toLowerCase().includes(filtroLower) || '') ||
          (item.name_indicador?.toLowerCase().includes(filtroLower) || '') ||
          (item.nm_completo_indicador?.toLowerCase().includes(filtroLower) || '') ||
          (item.dc_conceito_indicador?.toLowerCase().includes(filtroLower) || '') ||
          (item.tx_fonte_indicador?.toLowerCase().includes(filtroLower) || '')
        )
      : this.dados;
  }

  shouldDisplayCard(cardData: any): boolean {
    return this.filtro ? this.filteredDados.includes(cardData) : true;
  }

  getColor(nm_indicador: string): string {
    return this.cor ? this.cor : '#E5233D';
  }

  getImagePath(nm_indicador: string): string {
    const prefix = nm_indicador.split('.')[0];
    return `assets/img/${prefix}.png`;
  }
}