import { Component } from '@angular/core';


@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
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
    },
    {
      "imageUrl": "https://smastr16.blob.core.windows.net/portaleducacaoambiental/sites/201/2023/09/ods-quadrado2-1024x1004.jpg",
      "title": "Educação Ambiental ganha força com os ODS em SP",
      "description": "Novas iniciativas de educação ambiental em São Paulo estão sendo alinhadas aos Objetivos de Desenvolvimento Sustentável.",
      "link": "https://semil.sp.gov.br/educacaoambiental/2024/08/educacao-ambiental-ods-sp/"
    },
    {
      "imageUrl": "https://viradaodssp.sp.gov.br/wp-content/uploads/2024/03/Logo-Virada-ODS_Cor-1-1024x631.png",
      "title": "Evento em SP debate os desafios dos ODS",
      "description": "Especialistas se reuniram em São Paulo para discutir os principais desafios e estratégias para alcançar os ODS.",
      "link": "https://viradaodssp.sp.gov.br/2024/08/debate-ods-sp/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "São Paulo lança portal de transparência para os ODS",
      "description": "A Prefeitura de São Paulo lançou um portal de transparência dedicado ao acompanhamento dos Objetivos de Desenvolvimento Sustentável.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/portal-transparencia-ods/"
    },
    {
      "imageUrl": "https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg",
      "title": "SP promove workshops sobre os ODS nas escolas",
      "description": "Workshops sobre os ODS estão sendo promovidos em escolas de São Paulo para conscientizar estudantes sobre a importância da sustentabilidade.",
      "link": "https://www.prefeitura.sp.gov.br/noticias/2024/08/workshops-ods-escolas/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "Plano de ação de SP para os ODS é destaque na ONU",
      "description": "O plano de ação de São Paulo para os ODS foi apresentado na ONU como exemplo de boas práticas para outras cidades.",
      "link": "https://www.onu.org.br/2024/08/plano-acao-ods-sp/"
    },
    {
      "imageUrl": "https://smastr16.blob.core.windows.net/portaleducacaoambiental/sites/201/2023/09/ods-quadrado2-1024x1004.jpg",
      "title": "São Paulo avança na inclusão social com os ODS",
      "description": "Novas políticas públicas em São Paulo focam na inclusão social, em linha com os Objetivos de Desenvolvimento Sustentável.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/inclusao-social-ods/"
    },
    {
      "imageUrl": "https://viradaodssp.sp.gov.br/wp-content/uploads/2024/03/Logo-Virada-ODS_Cor-1-1024x631.png",
      "title": "SP lança campanha de conscientização sobre os ODS",
      "description": "Uma nova campanha foi lançada em São Paulo para conscientizar a população sobre os Objetivos de Desenvolvimento Sustentável.",
      "link": "https://viradaodssp.sp.gov.br/2024/08/campanha-conscientizacao-ods/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "Prefeitura de SP e empresas privadas se unem pelos ODS",
      "description": "A Prefeitura de São Paulo firmou parcerias com empresas privadas para acelerar a implementação dos ODS na cidade.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/parcerias-privadas-ods/"
    },
    {
      "imageUrl": "https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg",
      "title": "SP é exemplo em políticas ambientais para os ODS",
      "description": "São Paulo foi destaque em um relatório internacional sobre as políticas ambientais voltadas aos Objetivos de Desenvolvimento Sustentável.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/politicas-ambientais-ods/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "São Paulo inicia novas ações para atingir os ODS",
      "description": "A cidade de São Paulo iniciou uma série de novas ações voltadas para o cumprimento dos ODS até 2030.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/novas-acoes-ods/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "SP investe em energias renováveis para atingir metas dos ODS",
      "description": "São Paulo anuncia novos investimentos em energias renováveis, alinhados com os Objetivos de Desenvolvimento Sustentável.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/investimentos-energias-renovaveis-ods/"
    },
    {
      "imageUrl": "https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg",
      "title": "Projeto ODS nas Comunidades leva desenvolvimento sustentável à periferia de SP",
      "description": "Iniciativa da Prefeitura de São Paulo leva os Objetivos de Desenvolvimento Sustentável às comunidades mais vulneráveis da cidade.",
      "link": "https://www.prefeitura.sp.gov.br/noticias/2024/08/projeto-ods-comunidades/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "SP lança plano de mobilidade urbana sustentável",
      "description": "A cidade de São Paulo apresentou seu novo plano de mobilidade urbana, com foco na sustentabilidade e nos ODS.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/plano-mobilidade-urbana-ods/"
    },
    {
      "imageUrl": "https://smastr16.blob.core.windows.net/portaleducacaoambiental/sites/201/2023/09/ods-quadrado2-1024x1004.jpg",
      "title": "SP amplia programas de saúde pública alinhados aos ODS",
      "description": "São Paulo anuncia a expansão de programas de saúde pública, em conformidade com os Objetivos de Desenvolvimento Sustentável.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/programas-saude-publica-ods/"
    },
    {
      "imageUrl": "https://viradaodssp.sp.gov.br/wp-content/uploads/2024/03/Logo-Virada-ODS_Cor-1-1024x631.png",
      "title": "Empresas paulistas aderem aos ODS em iniciativas locais",
      "description": "Diversas empresas em São Paulo estão adotando os ODS em suas práticas e contribuindo para o desenvolvimento sustentável local.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/empresas-paulistas-ods/"
    },
    {
      "imageUrl": "https://natosafe.com.br/wp-content/uploads/2023/05/objetivos-de-desenvolvimento-susentavel.png",
      "title": "Programa Verde SP recebe reconhecimento internacional por cumprir ODS",
      "description": "O Programa Verde SP foi reconhecido internacionalmente por sua contribuição significativa para os Objetivos de Desenvolvimento Sustentável.",
      "link": "https://www.saopaulo.sp.gov.br/noticias/2024/08/programa-verde-sp-ods/"
    }
  ]
  itemsPerPage = 4;
  currentPage = 1;

  get totalPages() {
    return Math.ceil(this.highlights.length / this.itemsPerPage);
  }

  get paginatedHighlights() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.highlights.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}

