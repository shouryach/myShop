import { Component, OnInit } from '@angular/core';
import { LatestcheckoutService } from 'src/app/all-Services/latestcheckout.service';

@Component({
  selector: 'app-latest-item',
  templateUrl: './latest-item.component.html',
  styleUrls: ['./latest-item.component.scss'],
})
export class LatestItemComponent implements OnInit {

  latestCheckoutList = []
  constructor(private latestCheckoutService:LatestcheckoutService) { }

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

  ngOnInit() {
    this.latestCheckoutService.getLatestCheckout().subscribe((res:any[])=>{
      console.log(res);
      this.latestCheckoutList = res;
    })
  }

}
