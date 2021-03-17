import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-bag-content',
  templateUrl: './shopping-bag-content.component.html',
  styleUrls: ['./shopping-bag-content.component.scss'],
})
export class ShoppingBagContentComponent implements OnInit {

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
  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 2,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 15
  };

  ngOnInit() {}

}
