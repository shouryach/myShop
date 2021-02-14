import { Component, OnInit } from '@angular/core';
import { BannertopcarouselService } from 'src/app/all-Services/bannertopcarousel.service';

@Component({
  selector: 'app-banner-top-carousel',
  templateUrl: './banner-top-carousel.component.html',
  styleUrls: ['./banner-top-carousel.component.scss'],
})
export class BannerTopCarouselComponent implements OnInit {

  private bannertopcarousellist = []
  constructor(private bannertopcarouselService: BannertopcarouselService) { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 5,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 7
  };
  

  ngOnInit() {
    this.bannertopcarouselService.getBannerTopCarousel().subscribe((res : any[]) =>{
      console.log(res);
      this.bannertopcarousellist = res
    })
  }

}
