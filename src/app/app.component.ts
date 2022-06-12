import { Component } from '@angular/core';
import { UserInformationService } from './services/user-information.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ankushportfolio';
  details = {}
  constructor(private detail:UserInformationService) {
    this.details = detail.details
    console.warn(detail.details)
   }
}
