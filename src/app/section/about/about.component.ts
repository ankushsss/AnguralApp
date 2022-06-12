import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/services/user-information.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  details:any = {}
  constructor(private detail:UserInformationService) {
    this.details = detail.details
    console.warn(detail.details)
   }

  ngOnInit(): void {
  }

}
