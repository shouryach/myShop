import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPage } from 'src/app/all-pages/search/search.page';

@Component({
  selector: 'app-shop-details-content',
  templateUrl: './shop-details-content.component.html',
  styleUrls: ['./shop-details-content.component.scss'],
})
export class ShopDetailsContentComponent implements OnInit {
  qty:any;
  constructor(public modalController: ModalController) {
    this.qty = 1;
   }

  ngOnInit() {}

  async searchModel() {
    const modal = await this.modalController.create({
      component: SearchPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  next1(slides){
    slides.slideTo(0); // slide to next
  }
  next2(slides){
    slides.slideTo(1); // slide to next
  }
  next3(slides){
    slides.slideTo(2); // slide to next
  }
  next4(slides){
    slides.slideTo(3); // slide to next
  }
  // increment product qty
  incrementQty() {
    console.log(this.qty+1);
    this.qty += 1;
  }
 
  // decrement product qty
  decrementQty() {
    if(this.qty-1 < 1 ){
      this.qty = 1;
    }else{
      this.qty -= 1;
    }
  }

  

}
