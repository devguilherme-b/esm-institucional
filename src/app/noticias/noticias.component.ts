import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MySecondHeaderComponent } from "../my-second-header/my-second-header.component";
import { NoticiaService } from '../services/noticia.service';
import { MyContactsComponent } from "../my-contacts/my-contacts.component";

@Component({
  selector: 'app-noticias',
  imports: [ CommonModule, MySecondHeaderComponent, MyContactsComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticia: any;
  constructor(private route: ActivatedRoute, private noticiaService: NoticiaService){}
  ngOnInit()
  {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.noticia = this.noticiaService.getNoticiaPorId(id);
    });
  }
  // Função para compartilhar conteúdo
  currentUrl: string = window.location.origin;

  shareOnTwitter()
  {
    const twitterUrl = `https://twitter.com/intent/tweet?text=🚧 A ESM traz mais um conteúdo que você não pode perder!%0a%0aAcesse aqui: ${encodeURIComponent(this.currentUrl)}`;
    window.open(twitterUrl, '_blank');
  }
  shareOnWhatsApp()
  {
    const whatsappUrl = `https://api.whatsapp.com/send?text=🚧 A ESM traz mais um conteúdo que você não pode perder!%0a%0aAcesse aqui: ${encodeURIComponent(this.currentUrl)}`;
    window.open(whatsappUrl, '_blank');
  }
  copyToClipboard()
  {
    navigator.clipboard.writeText(this.currentUrl).then(() => {
      alert('Link copiado para a área de transferência! 🚧✅');
    }).catch(err => {
      console.error('Erro ao copiar o link', err);
    });
  }
}

