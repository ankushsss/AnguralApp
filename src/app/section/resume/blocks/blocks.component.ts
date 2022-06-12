import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})

export class BlocksComponent implements OnInit {

  constructor() { }
  @ Input() year = "" ;
  @ Input() degree = "";
  @ Input() college = "";
  @Input() description = "";
  @Input () role = "";
  @Input () company = "";
  ngOnInit(): void {
  }

}
