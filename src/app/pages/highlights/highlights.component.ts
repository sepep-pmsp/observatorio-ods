import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
  highlights = [
    {
      imageUrl: 'https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png',
      title: 'Os Objetivos de Desenvolvimento Sustentável no Brasil',
      description: 'Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.',
      link: 'https://brasil.un.org/pt-br/sdgs#:~:text=Os%20Objetivos%20de%20Desenvolvimento%20Sustent%C3%A1vel%20s%C3%A3o%20um%20apelo%20global%20%C3%A0,de%20paz%20e%20de%20prosperidade.'
    },
    {
      imageUrl: 'https://smastr16.blob.core.windows.net/portaleducacaoambiental/sites/201/2023/09/ods-quadrado2-1024x1004.jpg',
      title: 'O que são os ODS e o que você tem a ver com isso?',
      description: 'A Organização das Nações Unidas – ONU, no ano de 2015, lançou o desafio aos seus 193 Estados-membros, incluindo o Brasil, de uma nova agenda de desenvolvimento sustentável para os próximos 15 anos, a Agenda 2030, formada pelos chamados 17 Objetivos de Desenvolvimento Sustentável (ODS)',
      link: 'https://semil.sp.gov.br/educacaoambiental/2023/09/o-que-sao-os-ods-e-o-que-voce-tem-a-ver-com-isso/'
    },
    {
      imageUrl: 'https://www.estrategiaods.org.br/wp-content/uploads/2020/09/estrategia-ods-logo.png',
      title: 'O que são os ODS?',
      description: 'Os Objetivos de Desenvolvimento Sustentável (ODS) são uma agenda mundial adotada durante a Cúpula das Nações Unidas sobre o Desenvolvimento Sustentável em setembro de 2015, composta por 17 objetivos e 169 metas a serem atingidos até 2030.',
      link: 'https://www.estrategiaods.org.br/o-que-sao-os-ods/'
    },
    {
      imageUrl: 'https://viradaodssp.sp.gov.br/wp-content/uploads/2024/03/Logo-Virada-ODS_Cor-1-1024x631.png',
      title: 'Prefeitura de São Paulo anuncia a 3ª Edição da Virada ODS com apoio da ONU',
      description: 'Evento busca popularizar os Objetivos de Desenvolvimento Sustentável (ODS) e traz shows, palestras e ações de conscientização acerca da sustentabilidade',
      link: 'https://viradaodssp.sp.gov.br/2024/06/13/prefeitura-de-sao-paulo-anuncia-a-3a-edicao-da-virada-ods-com-apoio-da-onu/'
    },
    {
      imageUrl: 'https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg',
      title: 'Ações do Governo de SP contra o coronavírus atendem a 15 objetivos propostos pela ONU',
      description: 'As medidas tomadas pelo Governo de São Paulo para enfrentar a pandemia do novo coronavírus impactaram positivamente 15 dos 17 Objetivos de Desenvolvimento Sustentável (ODS) propostos pela Organização das Nações Unidas (ONU) na Agenda 2030.',
      link: 'https://www.saopaulo.sp.gov.br/spnoticias/ultimas-noticias/acoes-do-estado-contra-o-coronavirus-impactam-15-objetivos-propostos-pela-onu/'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcHxkEPfBwSBoKNqQPYOcr_X48TsIlGS4mw&s',
      title: 'Viva o Verde SP: população ajuda a planejar futuro de 8 parques em São Paulo',
      description: 'Iniciativa da Prefeitura de São Paulo com ONU-Habitat promoveu 12 oficinas com 253 participantes para elaborar planos de gestão, documentos que vão guiar a administração, usos e normas de oito parques da cidade.',
      link: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/noticias/?p=367085'
    },
  ]
}
