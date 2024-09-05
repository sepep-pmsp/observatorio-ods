import { Component, AfterViewInit } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent implements AfterViewInit{
  src1 = 'assets/pdf/agenda_municipal_2030.pdf';
  src2 = 'assets/pdf/plano-acao-agenda2030-final.pdf';

  downloadPdf(pdfPath: string) {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.substring(pdfPath.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  ngAfterViewInit(): void {
    this.createDiagram();
  }

  createDiagram(): void {
    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, 'myDiagramDiv', {
      'undoManager.isEnabled': true,
      initialAutoScale: go.Diagram.Uniform,
      isReadOnly: true, 
      allowMove: false, 
      allowDelete: false, 
      allowCopy: false, 
      allowLink: false, 
      allowTextEdit: false
    });

    diagram.layout = $(go.Layout, { isOngoing: false });

    diagram.nodeTemplate = $(
      go.Node, 'Auto',
      { locationSpot: go.Spot.Center },
      new go.Binding('location', 'loc'),
      $(go.Shape, 'RoundedRectangle', { strokeWidth: 0 }, new go.Binding('fill', 'color'), {
        width: 270, height: 150
      }),
      $(go.TextBlock, 
        { 
          margin: 8, 
          wrap: go.TextBlock.WrapFit, 
          textAlign: "center", 
          font: "bold 18pt sans-serif", 
          stroke: "white",
          width: 240,
          maxLines: 3
        }, 
        new go.Binding('text', 'key')
      )
    );

    
    diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.AvoidsNodes, corner: 10, adjusting: go.Link.Stretch }, 
      $(go.Shape),
      $(go.Shape, { toArrow: 'Standard' }),
      $(go.Panel, "Auto",
        $(go.Shape, "RoundedRectangle", { fill: "white", strokeWidth: 0 }),
        $(go.TextBlock, { margin: 5, wrap: go.TextBlock.WrapFit, width: 100 }, 
          new go.Binding('text', 'text'))
      )
    );

    diagram.model = new go.GraphLinksModel(
      [
        { key: 'ODS', color: '#ff4c4c', loc: new go.Point(-800, -10) },
        { key: 'Agenda 2030', color: '#ff8c1a', loc: new go.Point(-400, -10) },
        { key: 'Agenda Municipal 2030', color: '#3399ff', loc: new go.Point(-400, 200) },
        { key: 'Metas', color: '#ff3333', loc: new go.Point(-400, 400) },
        { key: 'Plano de Ação para Implementação da Agenda Municipal 2030', color: '#3399ff', loc: new go.Point(200, 200) },
        { key: 'Ações', color: '#66cc33', loc: new go.Point(300, 400) },
        { key: 'Indicadores', color: '#9933ff', loc: new go.Point(300, 620) },
        { key: 'Marcos de Atingimento', color: '#ff3333', loc: new go.Point(-400, 620) }
      ],
      [
        { from: 'ODS', to: 'Agenda 2030', text: '' },
        { from: 'Agenda 2030', to: 'Agenda Municipal 2030', text: 'O processo de localização da Agenda 2030 da ONU resultou na ' },
        { from: 'Agenda Municipal 2030', to: 'Metas', text: 'É implementado por meio de' },
        { from: 'Agenda Municipal 2030', to: 'Plano de Ação para Implementação da Agenda Municipal 2030', text: 'Contribui para a efetivação em longo prazo do' },
        { from: 'Plano de Ação para Implementação da Agenda Municipal 2030', to: 'Ações', text: 'Apresenta o conjunto de' },
        { from: 'Ações', to: 'Indicadores', text: 'São monitoradas por' },
        { from: 'Metas', to: 'Marcos de Atingimento', text: 'São monitoradas a partir de' },
        { from: 'Metas', to: 'Ações', text: 'Contribuem para o cumprimento das' }
      ]
    );
  }
}