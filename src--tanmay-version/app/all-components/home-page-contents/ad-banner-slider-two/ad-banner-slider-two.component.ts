import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-banner-slider-two',
  templateUrl: './ad-banner-slider-two.component.html',
  styleUrls: ['./ad-banner-slider-two.component.scss'],
})
export class AdBannerSliderTwoComponent implements OnInit {

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
