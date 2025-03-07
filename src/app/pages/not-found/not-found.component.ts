import { Component } from '@angular/core';
import { MySecondHeaderComponent } from "../../my-second-header/my-second-header.component";

@Component({
  selector: 'app-not-found',
  imports: [MySecondHeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
