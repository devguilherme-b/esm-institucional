import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from "../blog-card/blog-card.component";

@Component({
  selector: 'app-my-blog',
  imports: [BlogCardComponent, CommonModule],
  templateUrl: './my-blog.component.html',
  styleUrl: './my-blog.component.css'
})
export class MyBlogComponent {
  // Notícia aqui:
  noticias = [
    {
      id: 1,
      titulo: 'Segurança do Trabalho em Uruçuí-PI: Construindo Ambientes de Trabalho Confiáveis',
      descricao: 'Treinamento obrigatório reduz riscos e garante conformidade com as normas de segurança',
      imagemOne: 'assets/imgs/treinamento-pemt-one.jpg',
    },
    {
      id: 2,
      titulo: ' Safra 2025: Segurança, Planejamento e Colaboração',
      descricao: 'Planejamento estratégico, compromisso com a segurança e trabalho em equipe são pilares para uma safra produtiva e sustentável. Saiba como foi o alinhamento estratégico da CHS Agrícola!',
      imagemOne: 'assets/imgs/acompanhamento.jpg',
    },
    {
      id: 3,
      titulo: 'Segurança em Foco: Prevenção e Combate a Incêndios',
      descricao: ' Jovens aprendizes do Senar em Uruçuí (PI) aprenderam técnicas essenciais de prevenção e combate a incêndios. Veja como esse conhecimento pode salvar vidas!',
      imagemOne: 'assets/imgs/treinamento-contra-incendios.jpg',
      video: 'assets/videos/treinamento-contra-incendios.mp4'
    },
  ];
  constructor(private router: Router) { }
  verNoticia(noticia: any) {
    this.router.navigate(['/noticias', noticia.id], { state: { noticia } });
  }
}

