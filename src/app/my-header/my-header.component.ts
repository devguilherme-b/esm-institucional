import { Component, ElementRef, ViewChild} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-header',
  imports: [],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.css'
})
export class MyHeaderComponent {

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

  scrollToSection(sectionId: string){
    this.appComponent.scrollToSection(sectionId);
  }
}
