import { Component } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-my-home',
  imports: [],
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.css'
})
export class MyHomeComponent {
    constructor(private myHeaderComponent: MyHeaderComponent){}
  
    scrollToSection(sectionId: string){
      this.myHeaderComponent.scrollToSection(sectionId);
    }
}