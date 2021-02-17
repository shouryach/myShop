import { Component, OnInit } from '@angular/core';
import { MostShopedDetailsComponent } from '../most-shoped-details.component';
import { MostshoppedService } from 'src/app/all-Services/mostshopped.service';

@Component({
  selector: 'app-shoped-items',
  templateUrl: './shoped-items.component.html',
  styleUrls: ['./shoped-items.component.scss'],
})
export class ShopedItemsComponent implements OnInit {

  constructor(private mostShoppedService:MostshoppedService) { }

  private mostShoppedList =[]

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 2,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 18,
  };

  ngOnInit() {
    this.mostShoppedService.getMostShopped().subscribe((res : any[]) => {
      console.log(res);
      this.mostShoppedList = res;
    })
  }

}
