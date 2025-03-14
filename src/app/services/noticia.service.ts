import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private noticias = [
    {
      id: 1,
      titulo: 'Segurança do Trabalho em Uruçuí-PI: Construindo Ambientes de Trabalho Confiáveis',
      descricao: 'Treinamento obrigatório reduz riscos e garante conformidade com as normas de segurança',
      imagemOne: 'assets/imgs/treinamento-pemt-one.jpg',
      imagemTwo: 'assets/imgs/treinamento-pemt-two.jpg',
      video:'assets/videos/Vídeo do Edval Matias falando sobre a ESM Consultoria e Treinamento Ltda.mp4',
      introducao: 'No último sábado pela manhã, a ESM Consultorias e Treinamentos Ltda realizou mais um treinamento de NR-18 PEMT (Plataforma Elevatória Móvel de Trabalho). Essa capacitação é essencial para garantir a segurança e a eficiência no uso de plataformas de trabalho, como andaimes e equipamentos de elevação, seguindo as diretrizes da Norma Regulamentadora 18.',
      desenvolvimentoOne: 'Com foco na prevenção de acidentes, os participantes aprenderam sobre: Operação segura das plataformas; Identificação de riscos no ambiente de trabalho; Manutenção preventiva dos equipamentos; Requisitos legais e responsabilidades de cada profissional.',
      desenvolvimentoTwo: 'A capacitação contínua é um passo fundamental para um ambiente de trabalho mais seguro e produtivo. Afinal, segurança não é custo, é investimento!',
      conclusao: 'Você sabia que a NR-18 passou por atualizações recentes? Fique atento às mudanças e invista em treinamentos periódicos para manter sua equipe preparada.',
      mensagem: 'Entre em contato com a ESM Consultorias e Treinamentos Ltda e garanta a qualificação da sua equipe!',
      autor: 'ESM Consultoria e Treinamentos Ltda'
    },
    {
      id: 2,
      titulo: ' Safra 2025: Segurança, Planejamento e Colaboração',
      descricao: 'Planejamento estratégico, compromisso com a segurança e trabalho em equipe são pilares para uma safra produtiva e sustentável. Saiba como foi o alinhamento estratégico da CHS Agrícola!',
      imagemOne: 'assets/imgs/acompanhamento.jpg',
      imagemThree: 'assets/imgs/acompanhamento-esm.jpg',
      video:'assets/videos/Vídeo do Edval Matias falando sobre a ESM Consultoria e Treinamento Ltda.mp4',
      introducao: 'A segurança e a eficiência no campo começam com um planejamento estratégico bem estruturado. Como Consultor em Segurança do Trabalho, acompanhei de perto o Alinhamento Estratégico das equipes regionais da CHS Agrícola, um momento essencial para reforçar boas práticas, trocar conhecimentos e fortalecer o compromisso com uma safra mais produtiva e sustentável.',
      desenvolvimentoOne: 'Planejamento estratégico para maximizar a produtividade. Compromisso com a segurança para proteger vidas. Trabalho em equipe como diferencial no campo.',
      desenvolvimentoTwo: 'O futuro da agricultura depende de inovação, responsabilidade e do bem-estar de todos os envolvidos.',
      conclusao: 'Quais práticas de segurança ou planejamento você considera indispensáveis no seu trabalho?',
      autor: 'Edval Matias'
    },
    {
      id: 3,
      titulo: 'Segurança em Foco: Prevenção e Combate a Incêndios',
      descricao: ' Jovens aprendizes do Senar em Uruçuí (PI) aprenderam técnicas essenciais de prevenção e combate a incêndios. Veja como esse conhecimento pode salvar vidas!',
      imagemOne: 'assets/imgs/treinamento-contra-incendios.jpg',
      video: 'assets/videos/treinamento-contra-incendios.mp4',
      introducao: 'A segurança no ambiente de trabalho começa com conhecimento e preparo. Durante a aula de NR-23 - Prevenção e Combate a Incêndios, os jovens aprendizes do Programa Jovem Aprendiz do Senar, em Uruçuí (PI), tiveram a oportunidade de aprender técnicas essenciais para proteger vidas e patrimônios.',
      desenvolvimentoOne: 'Com a orientação do consultor e professor Edval Matias, a turma explorou os principais conceitos sobre prevenção de incêndios, uso correto de extintores e medidas de emergência em diferentes cenários. O treinamento não apenas reforça a importância da segurança, mas também capacita os profissionais do futuro para atuar com responsabilidade no setor agrícola e industrial.',
      conclusao: 'Com a orientação do consultor e professor Edval Matias, a turma explorou os principais conceitos sobre prevenção de incêndios, uso correto de extintores e medidas de emergência em diferentes cenários. O treinamento não apenas reforça a importância da segurança, mas também capacita os profissionais do futuro para atuar com responsabilidade no setor agrícola e industrial.',
      autor: 'Edval Matias'
    },
  ];
  getNoticiaPorId(id: number)
  {
    return this.noticias.find(noticia => noticia.id === id);
  }
}
