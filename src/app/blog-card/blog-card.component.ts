import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input() noticia: any;

  constructor(private router: Router){}
  
  verNoticia(id: number){
    this.router.navigate(['/noticias', id]);
  }
}
