import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/services/user-information.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
   details:any={}
  constructor(private detail:UserInformationService) {
    this.details = detail.details
   }

  ngOnInit(): void {
  }

}
