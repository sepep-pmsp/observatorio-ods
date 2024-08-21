import { Component } from '@angular/core';


@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrl: './indicadores.component.css'
})
export class IndicadoresComponent {
  estrategias = [
    { imgSrc: '../../../../assets/img/01.png', shadowColor: '#E5233D' },
    { imgSrc: '../../../../assets/img/02.png', shadowColor: '#DDA73A' },
    { imgSrc: '../../../../assets/img/03.png', shadowColor: '#4CA146' },
    { imgSrc: '../../../../assets/img/04.png', shadowColor: '#C7212F' },
    { imgSrc: '../../../../assets/img/05.png', shadowColor: '#EF402D' },
    { imgSrc: '../../../../assets/img/06.png', shadowColor: '#27BFE6' },
    { imgSrc: '../../../../assets/img/07.png', shadowColor: '#FBC412' },
    { imgSrc: '../../../../assets/img/08.png', shadowColor: '#A31C44' },
    { imgSrc: '../../../../assets/img/09.png', shadowColor: '#F26A2E' },
    { imgSrc: '../../../../assets/img/10.png', shadowColor: '#DE1768' },
    { imgSrc: '../../../../assets/img/11.png', shadowColor: '#F89D2A' },
    { imgSrc: '../../../../assets/img/12.png', shadowColor: '#BF8D2C' },
    { imgSrc: '../../../../assets/img/13.png', shadowColor: '#407F46' },
    { imgSrc: '../../../../assets/img/14.png', shadowColor: '#1F97D4' },
    { imgSrc: '../../../../assets/img/15.png', shadowColor: '#59BA47' },
    { imgSrc: '../../../../assets/img/16.png', shadowColor: '#136A9F' },
    { imgSrc: '../../../../assets/img/17.png', shadowColor: '#14496B' }
  ];

  selectedModal: number | null = null;

  toggleModal(index: number) {
    this.selectedModal = this.selectedModal === index ? null : index;
  }

  getBoxShadow(index: number): string {
    return this.selectedModal === index ? `0px 0px 20px 8px ${this.estrategias[index].shadowColor}` : 'none';
  }
}