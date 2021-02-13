import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-deals',
  templateUrl: './best-deals.component.html',
  styleUrls: ['./best-deals.component.scss'],
})
export class BestDealsComponent implements OnInit {

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
