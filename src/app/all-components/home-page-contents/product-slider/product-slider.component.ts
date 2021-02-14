import { Component, OnInit } from '@angular/core';
import { ProductsliderService } from 'src/app/all-Services/productslider.service';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent implements OnInit {

  private productSliderList = []

  constructor(private productsliderService:ProductsliderService) { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 3,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 7,
  };

  ngOnInit() {
    this.productsliderService.getNewOnShop().subscribe((res : any[]) =>{
      console.log(res);
      this.productSliderList = res;
    })
  }



}
