import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-item',
  templateUrl: './latest-item.component.html',
  styleUrls: ['./latest-item.component.scss'],
})
export class LatestItemComponent implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 3,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 18,
  };

  ngOnInit() {}

}
