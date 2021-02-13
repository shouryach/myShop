import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent implements OnInit {
  activelike: boolean = false;
  constructor() { }

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

  ngOnInit() { }
  active(){
    this.activelike = !this.activelike;
  }


}
