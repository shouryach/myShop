import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-content',
  templateUrl: './checkout-content.component.html',
  styleUrls: ['./checkout-content.component.scss'],
})
export class CheckoutContentComponent implements OnInit {

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
