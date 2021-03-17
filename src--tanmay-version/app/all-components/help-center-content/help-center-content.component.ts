import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center-content',
  templateUrl: './help-center-content.component.html',
  styleUrls: ['./help-center-content.component.scss'],
})
export class HelpCenterContentComponent implements OnInit {

  noQueryy: boolean= false;
  mainQuery: boolean= true;
  constructor() { }

  ngOnInit() {}

}
