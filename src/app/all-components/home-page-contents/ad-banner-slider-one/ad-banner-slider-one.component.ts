import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-banner-slider-one',
  templateUrl: './ad-banner-slider-one.component.html',
  styleUrls: ['./ad-banner-slider-one.component.scss'],
})
export class AdBannerSliderOneComponent implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0,    
  };

  ngOnInit() {}

}
