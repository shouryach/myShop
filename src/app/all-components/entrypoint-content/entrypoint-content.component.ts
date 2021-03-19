import { Component, OnInit } from '@angular/core';
import { FlashscreenService } from 'src/app/all-Services/flashscreen.service';
import { ApiService } from 'src/app/all-Services/api.service';

@Component({
  selector: 'app-entrypoint-content',
  templateUrl: './entrypoint-content.component.html',
  styleUrls: ['./entrypoint-content.component.scss'],
})
export class EntrypointContentComponent implements OnInit {

  flashScreens: any;
  user: any;
  hide = false;

  constructor(private api: ApiService, private flash: FlashscreenService) { }

  slideOpts = {
    initialSlide: 0,
    autoplay: true,
    freeMode: false,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0
  };

  ngOnInit() {

    this.flash.getFlashScreen().subscribe(response => {
      this.flashScreens = response;
    })

    this.user = this.api.getCurrentUser();
    this.user.subscribe(user => {
      if (user) {
        console.log("User s this ")
        console.log(user);
        this.hide = true;
      }
      else {
        console.log("empty user", user);
        this.hide = false;
      }



    });


  }

}
