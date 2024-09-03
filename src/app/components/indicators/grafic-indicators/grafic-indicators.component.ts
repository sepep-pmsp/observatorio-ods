import { Component, Input, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-grafic-indicators',
  templateUrl: './grafic-indicators.component.html',
  styleUrls: ['./grafic-indicators.component.css']
})
export class GraficIndicatorsComponent implements OnInit, OnDestroy {
  @Input() dados: any; 
  @Input() indicadorId: string = ''; 
  @Input() unidadeSelecionada: string = ''; 
  @Input() selecaoOpcao: string = '';
  @Input() corIndicador: string | null = null;

  dadosFiltrados: any = {}; 
  unidadesTerritoriais: string[] = []; 
  opcoes: string[] = [];
  dadosSelecionados: any = {};

  @ViewChild('chartCanvas', { static: true }) chartCanvas: ElementRef<HTMLCanvasElement> | undefined; // Adicionando { static: true }
  chart: Chart | undefined;

  ngOnInit() {
    this.filtrarDados(); 
    this.createBaseChart(); // Cria um gráfico base ao iniciar
  }

  ngOnDestroy() {
    this.destroyChart(); 
  }

  filtrarDados() {
    if (this.dados && this.indicadorId) {
      this.dadosFiltrados = this.dados.find((item: any) => item.nm_indicador === this.indicadorId);
      this.unidadesTerritoriais = this.obterUnidadesDisponiveis();
    }
  }

  obterUnidadesDisponiveis(): string[] {
    const disponiveis: string[] = [];
    if (this.dadosFiltrados?.resultados?.['Município']) {
      disponiveis.push('Município');
    }
    if (this.dadosFiltrados?.resultados?.['Subprefeitura']) {
      disponiveis.push('Subprefeitura');
    }
    if (this.dadosFiltrados?.resultados?.['Distrito']) {
      disponiveis.push('Distrito');
    }
    return disponiveis;
  }

  carregarDados() {
    if (this.unidadeSelecionada === 'Município') {
      this.dadosSelecionados = this.dadosFiltrados?.resultados?.['Município']?.['São Paulo'] || {};
      this.opcoes = [];
    } else if (this.unidadeSelecionada === 'Subprefeitura' || this.unidadeSelecionada === 'Distrito') {
      const dataObject = this.dadosFiltrados?.resultados?.[this.unidadeSelecionada] || {};
      this.opcoes = Object.keys(dataObject); 
      this.atualizarSelecao();
    } else {
      this.dadosSelecionados = {};
      this.opcoes = [];
    }

    this.createChart(); 
  }

  atualizarSelecao() {
    if (this.unidadeSelecionada !== 'Município' && this.selecaoOpcao) {
      this.dadosSelecionados = this.dadosFiltrados?.resultados?.[this.unidadeSelecionada]?.[this.selecaoOpcao] || {};
    }

    this.createChart();
  }

  getColor(): string {
    return this.corIndicador ?? '#E5233D';
  }

  // Cria o gráfico base vazio
  createBaseChart(): void {
    if (!this.chartCanvas) {
      return;
    }

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      const config: ChartConfiguration = {
        type: 'line',
        data: {
          labels: ['Ano'], 
          datasets: [{
            label: 'Dados do Indicador',
            data: [0], 
            fill: false,
            borderColor: this.getColor(),
            backgroundColor: this.getColor() + '0D',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true
            }
          },
          scales: {
            x: {
              type: 'category',
              title: {
                display: true,
                text: 'Ano'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Valor'
              }
            }
          }
        }
      };

      this.chart = new Chart(ctx, config);
    }
  }

  createChart(): void {
    if (!this.chartCanvas) {
      return;
    }

    const dadosIndicador = this.dadosSelecionados || {};
    const labels = Object.keys(dadosIndicador).sort();
    const dataValues = labels.map(label => dadosIndicador[label]);
    if (labels.length === 0 || dataValues.length === 0) {
      this.destroyChart(); 
      this.createBaseChart(); // Cria o gráfico base novamente se não houver dados
      return;
    }

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Dados do Indicador',
          data: dataValues,
          fill: false,
          borderColor: this.getColor(),
          backgroundColor: this.getColor() + '0D',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Ano'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Valor'
            }
          }
        }
      }
    };

    this.destroyChart();

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, config);
    }
  }

  destroyChart(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = undefined;
    }
  }

  hasData(): boolean {
    return Object.keys(this.dadosSelecionados).length > 0;
  }
}
