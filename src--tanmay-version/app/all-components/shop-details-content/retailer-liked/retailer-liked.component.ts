import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer-liked',
  templateUrl: './retailer-liked.component.html',
  styleUrls: ['./retailer-liked.component.scss'],
})
export class RetailerLikedComponent implements OnInit {

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
