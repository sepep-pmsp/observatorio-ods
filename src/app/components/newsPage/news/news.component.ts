import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  highlights = [
    {
      "imageUrl": "assets/img/Grafismo.png",
      "title": "Edital de Seleção Pública 2024",
      "description": "Inscrições até dia 10/11/2024. Veja aqui o Edital de Seleção Pública nº 01/2024 , que visa receber inscrições de membros da sociedade civil para compor a Comissão Municipal para o Desenvolvimento Sustentável (Agenda 2030).",
      "link": "https://capital.sp.gov.br/web/meio_ambiente/w/participacao_social/conselhos_e_orgaos_colegiados/313228"
    },
    {
      "imageUrl": "assets/img/Grafismo.png",
      "title": "Congresso Internacional da Virada ODS coloca educação e redução das desigualdades em foco",
      "description": "Série de palestras abordaram temáticas dos Objetivos de Desenvolvimento Sustentável, com destaque para os tópicos 4 e 10",
      "link": "https://capital.sp.gov.br/w/congresso-internacional-da-virada-ods-coloca-educa%C3%A7%C3%A3o-e-redu%C3%A7%C3%A3o-das-desigualdades-em-foco?p_l_back_url=%2Fbusca%3Fq%3DVirada%2BODS%26news%3D%26delta%3D20%26start%3D1&p_l_back_url_title=Busca"
    },
    {
      "imageUrl": "assets/img/Grafismo.png",
      "title": "Prefeitura disponibiliza a Avaliação diagnóstica inicial do Relatório Voluntário Local (RVL)",
      "description": "O documento evidencia a cidade como exemplo internacional no que se refere à localização e ao mapeamento dos ODS. A capital paulista aderiu, em 2019, ao compromisso da Declaração de Revisão Voluntária da ONU para governos locais e regionais, denominada 'Relatório Voluntário Local' (Voluntary Local Review, em inglês)",
      "link": "https://capital.sp.gov.br/w/prefeitura-disponibiliza-a-avalia%C3%A7%C3%A3o-diagn%C3%B3stica-inicial-do-relat%C3%B3rio-volunt%C3%A1rio-local-rvl-?p_l_back_url=%2Fbusca%3Fq%3DVirada%2BODS%26news%3D%26delta%3D20%26start%3D1&p_l_back_url_title=Busca"
    },
    {
      "imageUrl": "assets/img/Grafismo.png",
      "title": "Virada ODS em Imagens",
      "description": "Site da Virada ODS com informações sobre o evento A Virada ODS é a maior política pública municipal do mundo para ampliar a conscientização e o engajamento cívico rumo aos Objetivos de Desenvolvimento Sustentável para 2030. Apenas 1% da população brasileira conhece a Agenda dos Objetivos de Desenvolvimento Sustentável. Enquanto não tivermos 99% da população consciente e engajada, não atingiremos os objetivos para 2030.",
      "link": "https://viradaodssp.sp.gov.br/"
    }
  ]
}
