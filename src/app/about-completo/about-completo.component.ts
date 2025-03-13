import { Component } from '@angular/core';
import { MySecondHeaderComponent } from "../my-second-header/my-second-header.component";
import { MyContactsComponent } from "../my-contacts/my-contacts.component";

@Component({
  selector: 'app-about-completo',
  imports: [MySecondHeaderComponent, MyContactsComponent],
  templateUrl: './about-completo.component.html',
  styleUrl: './about-completo.component.css'
})
export class AboutCompletoComponent {

}
