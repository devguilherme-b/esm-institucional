import { Component } from '@angular/core';
import { MySecondHeaderComponent } from "../../my-second-header/my-second-header.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-not-found',
  imports: [MySecondHeaderComponent, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
}
