import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems = {
    title:"ankush",
    navOptions:[
      {
        name:"Home",
        link:"#home-section"
      },
      {
        name:"About",
        link:"#about-section"
      },
      {
        name:"Resume",
        link:"#resume-section"
      },
      {
        name:"Services",
        link:"#services-section"
      },
      {
        name:"Projects",
        link:"#projects-section"
      },
      {
        name:"Skills",
        link:"#skills-section"
      },
      {
        name:"Contact",
        link:"#contact-section"
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
