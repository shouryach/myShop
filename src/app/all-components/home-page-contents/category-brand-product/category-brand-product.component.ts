import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-brand-product',
  templateUrl: './category-brand-product.component.html',
  styleUrls: ['./category-brand-product.component.scss'],
})
export class CategoryBrandProductComponent implements OnInit {

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
