import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   details:any = {}
  constructor(private detail:UserInformationService) {
    this.details = detail.details
   }

  ngOnInit(): void {
  }

}
