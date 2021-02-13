import { Component, OnInit } from '@angular/core';
import { FlashscreenService } from 'src/app/all-Services/flashscreen.service';

@Component({
  selector: 'app-entrypoint-content',
  templateUrl: './entrypoint-content.component.html',
  styleUrls: ['./entrypoint-content.component.scss'],
})
export class EntrypointContentComponent implements OnInit {

   flashScreens:any; 

  constructor(private flash:FlashscreenService) { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0
  };

  ngOnInit() {

    this.flash.getFlashScreen().subscribe(response=>{
      this.flashScreens = response;
    })

    

  }

}
