import { AppComponent } from '../app.component';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHomeComponent } from '../my-home/my-home.component';
import { MyAboutComponent } from "../my-about/my-about.component";
import { MyServicesComponent } from "../my-services/my-services.component";
import { MyPartnersComponent } from "../my-partners/my-partners.component";
import { MyContactsComponent } from "../my-contacts/my-contacts.component";
import { MyBlogComponent } from "../my-blog/my-blog.component";

@Component({
  selector: 'app-my-header',
  imports: [ MyHomeComponent, MyAboutComponent, MyServicesComponent, MyPartnersComponent, MyContactsComponent, MyBlogComponent, CommonModule],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.css'
})
export class MyHeaderComponent {
  // Obtem referência direta para os elementos no HTML
  @ViewChild('home') home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('blog') blog!: ElementRef;
  @ViewChild('partners') partners!: ElementRef;
  @ViewChild('contacts') contacts!: ElementRef;
  // Rola suavemente até a seção desejada
  // Utiliza srollIntView() para criar uma navegação fluida
  // @param section - O ID da seção que será exibida
  scrollToSection(section: string) {
    const sections: { [key: string]: ElementRef } = {
      home: this.home,
      about: this.about,
      services: this.services,
      blog: this.blog,
      partners: this.partners,
      contacts: this.contacts
    };
    const elementRef = sections[section];
    if (elementRef) {
      this.smoothScroll(elementRef.nativeElement);
    }
  }

  smoothScroll(target: HTMLElement){
    const startPosition = window.scrollY; // Atual posição
    const targetPosition = target.getBoundingClientRect().top + window.scrollY; // Posição de destino
    const distance = targetPosition - startPosition; // Distância à percorrer
    const duration = 800; // Tempo da rolagem em milissegundos
    let startTime: number | null = null;

    function animation(currentTime: number){
      if (startTime === null) startTime = currentTime;

      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Garante que não passe de 1
      const easeInOutCubic = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2; // Suavização

      window.scrollTo(0, startPosition + distance * easeInOutCubic);
      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  }

  @ViewChild('navigationHeader') navigationHeader!: ElementRef; // Captura o elemento
  showSidebar: boolean = false;
  // " ! " Altera o valor de false para true, ou seja, 
  // essa função alterna entre exibir e ocultar barra de navegação
  ativaShowSidebar() {
    this.showSidebar = !this.showSidebar;
    
    if (this.showSidebar) {
      this.navigationHeader.nativeElement.style.marginLeft = '-1vw';
      this.navigationHeader.nativeElement.style.animationName = 'showSidebar';
    }else{
      this.navigationHeader.nativeElement.style.marginLeft = '-100vw';
      this.navigationHeader.nativeElement.style.animationName = '';
    }
  }

  constructor(private appComponent: AppComponent){}
}
