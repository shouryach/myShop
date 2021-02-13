import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoped-items',
  templateUrl: './shoped-items.component.html',
  styleUrls: ['./shoped-items.component.scss'],
})
export class ShopedItemsComponent implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 2,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 18,
  };

  ngOnInit() {}

}
