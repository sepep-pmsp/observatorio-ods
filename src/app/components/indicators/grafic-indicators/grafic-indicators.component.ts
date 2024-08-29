import { Component, Input, OnInit } from '@angular/core';
import { DadosService } from '../../../service/dados.service';

@Component({
  selector: 'app-grafic-indicators',
  templateUrl: './grafic-indicators.component.html',
  styleUrls: ['./grafic-indicators.component.css']
})
export class GraficIndicatorsComponent implements OnInit {
  @Input() dados: any = {};
  @Input() unidadeSelecionada: string = '';
  @Input() selecaoOpcao: string = '';
  @Input() indicadorId: string = '';
  @Input() cardId: string = '';

  unidadesTerritoriais = ['Município', 'Subprefeitura', 'Distrito'];
  opcoes: string[] = [];
  indicadores: any[] = [];
  dadosSelecionados: any = {};

  private dadosJson: any = {};

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.getData().subscribe({
      next: (response) => {
        this.dadosJson = response['01'][0].resultados;
        this.carregarDados();
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    });
  }

  carregarDados() {
    if (this.unidadeSelecionada === 'Município') {
      this.dadosSelecionados = this.dadosJson['Município'] || {};
      this.carregarIndicadores();
    } else {
      if (this.selecaoOpcao) {
        this.dadosSelecionados = this.dadosJson[this.unidadeSelecionada]?.[this.selecaoOpcao] || {};
      } else {
        this.dadosSelecionados = {};
      }
      this.opcoes = Object.keys(this.dadosJson[this.unidadeSelecionada] || {});
      this.selecaoOpcao = '';
    }
    this.indicadores = Object.keys(this.dadosSelecionados).map(indicador => ({
      nome: indicador,
      dados: this.dadosSelecionados[indicador]
    }));
  }


  carregarIndicadores() {
    this.indicadores = [];

    for (let indicador in this.dadosSelecionados) {
      if (this.dadosSelecionados.hasOwnProperty(indicador)) {
        this.indicadores.push({
          nome: indicador,
          dados: this.dadosSelecionados[indicador]
        });
      }
    }
  }

  atualizarSelecao() {
    if (this.selecaoOpcao) {
      this.dadosSelecionados = this.dadosJson[this.unidadeSelecionada]?.[this.selecaoOpcao] || {};
      this.carregarIndicadores();
    }
  }
  getDadosByCardId(cardId: string): any {
    const indicadorId = cardId.split('-')[1];
    return this.dadosJson[indicadorId] || {};
  }
}
