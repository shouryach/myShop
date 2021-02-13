import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-top-carousel',
  templateUrl: './banner-top-carousel.component.html',
  styleUrls: ['./banner-top-carousel.component.scss'],
})
export class BannerTopCarouselComponent implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 5,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 7
  };
  

  ngOnInit() {}

}
