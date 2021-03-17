import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  open: boolean = false;
  constructor() { }

  sub_click(){
    this.open=!this.open;
  }

  ngOnInit() {}

}
