import { Component, OnInit } from '@angular/core';
import { DadosService } from '../../../service/dados.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})

export class IndicadoresComponent {
  estrategias = [
    { id: '01', imgSrc: 'assets/img/01.png', shadowColor: '#E5233D' },
    { id: '02', imgSrc: 'assets/img/02.png', shadowColor: '#DDA73A' },
    { id: '03', imgSrc: 'assets/img/03.png', shadowColor: '#4CA146' },
    { id: '04', imgSrc: 'assets/img/04.png', shadowColor: '#C7212F' },
    { id: '05', imgSrc: 'assets/img/05.png', shadowColor: '#EF402D' },
    { id: '06', imgSrc: 'assets/img/06.png', shadowColor: '#27BFE6' },
    { id: '07', imgSrc: 'assets/img/07.png', shadowColor: '#FBC412' },
    { id: '08', imgSrc: 'assets/img/08.png', shadowColor: '#A31C44' },
    { id: '09', imgSrc: 'assets/img/09.png', shadowColor: '#F26A2E' },
    { id: '10', imgSrc: 'assets/img/10.png', shadowColor: '#DE1768' },
    { id: '11', imgSrc: 'assets/img/11.png', shadowColor: '#F89D2A' },
    { id: '12', imgSrc: 'assets/img/12.png', shadowColor: '#BF8D2C' },
    { id: '13', imgSrc: 'assets/img/13.png', shadowColor: '#407F46' },
    { id: '14', imgSrc: 'assets/img/14.png', shadowColor: '#1F97D4' },
    { id: '15', imgSrc: 'assets/img/15.png', shadowColor: '#59BA47' },
    { id: '16', imgSrc: 'assets/img/16.png', shadowColor: '#136A9F' },
    { id: '17', imgSrc: 'assets/img/17.png', shadowColor: '#14496B' }
  ];

  selectedIndicator: string | null = null;
  dadosIndicador: any = {};

  constructor(private dadosService: DadosService) {}

  ngOnInit() {
    this.dadosService.getData().subscribe(data => {
      this.dadosIndicador = data;
    });
  }

  selectIndicator(id: string) {
    this.selectedIndicator = this.selectedIndicator === id ? null : id;
  }

  getBoxShadow(id: string): string {
    if (this.selectedIndicator === id) {
      const strategy = this.estrategias.find(e => e.id === id);
      return strategy ? `0px 0px 20px 8px ${strategy.shadowColor}` : 'none';
    }
    return 'none';
  }

  getCor(id: string): string {
    const estrategia = this.estrategias.find(e => e.id === id);
    return estrategia ? estrategia.shadowColor : '#000';
  }
}

