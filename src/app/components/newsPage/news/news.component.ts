import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  highlights = [
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "São Paulo avança na implementação dos ODS",
      "description": "A Prefeitura de São Paulo anunciou novos projetos que visam a implementação de políticas sustentáveis em consonância com os ODS.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/sao-paulo-avanca-ods/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "Virada ODS 2024 traz programação diversificada",
      "description": "A 3ª edição da Virada ODS contará com palestras, oficinas e atividades culturais em São Paulo, visando a conscientização sobre os Objetivos de Desenvolvimento Sustentável.",
      "link": "https://viradaodssp.sp.gov.br/2024/08/programacao-virada-ods/"
    },
    {
      "imageUrl": "https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg",
      "title": "Governo de SP adota novas metas de sustentabilidade",
      "description": "O Governo de São Paulo anunciou novas metas para alcançar os ODS até 2030, focando em educação, saúde e meio ambiente.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/governo-sp-metas-sustentabilidade/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "São Paulo e ONU fortalecem parceria para alcançar os ODS",
      "description": "A Prefeitura de São Paulo e a ONU firmaram um novo acordo para fortalecer a implementação dos ODS na cidade.",
      "link": "https://www.onu.org.br/2024/08/sp-onu-parceria-ods/"
    }
  ]
}
