import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipped-content',
  templateUrl: './shipped-content.component.html',
  styleUrls: ['./shipped-content.component.scss'],
})
export class ShippedContentComponent implements OnInit {

  
  viewadd_pay: boolean = false;
  rotate: boolean = false;
  constructor() { }

  view_add(){
    this.viewadd_pay = !this.viewadd_pay;
    this.rotate = !this.rotate;
  }

  ngOnInit() {}

}
