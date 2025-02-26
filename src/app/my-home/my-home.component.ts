import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-home',
  imports: [],
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.css'
})
export class MyHomeComponent {
  constructor(private appComponent: AppComponent){}
  
    scrollToSection(sectionId: string){
      this.appComponent.scrollToSection(sectionId);
    }
}
