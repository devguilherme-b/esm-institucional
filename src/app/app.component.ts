import { Component} from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MySecondHeaderComponent } from "./my-second-header/my-second-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFooterComponent, MySecondHeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ESM';

  scrollToSection(sectionId: string) {
    throw new Error('Method not implemented.');
  }
  
  mostrarSegundoHeader = true;
  constructor(private router: Router)
  { 
    // Se a rota for a princiapl ('/') ele esconde o componente
    this.router.events.subscribe(() => {
      this.mostrarSegundoHeader = this.router.url !== '/';
    });

    // direciona o usuario para o topo da página na navegação entre páginas
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Sempre rola para o topo ao trocar de rota
      }
    });
  }  
}