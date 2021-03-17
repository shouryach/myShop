import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-type-content',
  templateUrl: './payment-type-content.component.html',
  styleUrls: ['./payment-type-content.component.scss'],
})
export class PaymentTypeContentComponent implements OnInit {

  avail: boolean = false;
  more: boolean = true;
  less: boolean = false;
  active: boolean = false;
  constructor() { }

  expand(){
    this.avail=!this.avail;
    this.more=!this.more;
    this.less=!this.less;
    this.active=!this.active;
  }

  ngOnInit() {}

}
