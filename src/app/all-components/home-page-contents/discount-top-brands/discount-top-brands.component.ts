import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-top-brands',
  templateUrl: './discount-top-brands.component.html',
  styleUrls: ['./discount-top-brands.component.scss'],
})
export class DiscountTopBrandsComponent implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 2,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 7,
  };

  ngOnInit() {}

}
