import { Component, OnInit } from '@angular/core';
import { BannertopslideoneService } from 'src/app/all-Services/bannertopslideone.service';

@Component({
  selector: 'app-ad-banner-slider-one',
  templateUrl: './ad-banner-slider-one.component.html',
  styleUrls: ['./ad-banner-slider-one.component.scss'],
})
export class AdBannerSliderOneComponent implements OnInit {

  constructor(private bannertopslideoneService : BannertopslideoneService ) { }

  bannerSlideOnePictureArray = []

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0,    
  };

  ngOnInit() {
    this.bannertopslideoneService.getBannerSlideOne().subscribe((res : any[]) =>
      { console.log(res),
        this.bannerSlideOnePictureArray = res}
      
      )

  }

}
