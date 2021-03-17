import { Component, OnInit } from '@angular/core';
import { BestdealService } from 'src/app/all-Services/bestdeal.service';

@Component({
  selector: 'app-best-deals',
  templateUrl: './best-deals.component.html',
  styleUrls: ['./best-deals.component.scss'],
})
export class BestDealsComponent implements OnInit {

  bestDealsList = []

  constructor(private bestDealsService:BestdealService) { }

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

  ngOnInit() {
    this.bestDealsService.getBestDeals().subscribe((res:any[]) =>{
      console.log(res);
      this.bestDealsList = res;

    })
  }

}
