import { Component, OnInit } from '@angular/core';
import { BannertopService } from 'src/app/all-Services/bannertop.service';

@Component({
  selector: 'app-banner-top-slide',
  templateUrl: './banner-top-slide.component.html',
  styleUrls: ['./banner-top-slide.component.scss'],
})
export class BannerTopSlideComponent implements OnInit {

  bannerTops:any; 
  constructor(private topBanner:BannertopService) { }

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
    this.topBanner.getTopBanners().subscribe(response=>{
      console.log(response);
      this.bannerTops = response;
    })
  }

}
