import { Component, OnInit } from '@angular/core';
import { EpicdiscountService } from 'src/app/all-Services/epicdiscount.service';

@Component({
  selector: 'app-discount-top-brands',
  templateUrl: './discount-top-brands.component.html',
  styleUrls: ['./discount-top-brands.component.scss'],
})
export class DiscountTopBrandsComponent implements OnInit {

  private epicDiscountList = []
  constructor(private epicDiscountService:EpicdiscountService) { }

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
    this.epicDiscountService.getEpicDiscount().subscribe((res:any[]) =>{
      console.log(res)
      this.epicDiscountList = res;
    })
  }

}
