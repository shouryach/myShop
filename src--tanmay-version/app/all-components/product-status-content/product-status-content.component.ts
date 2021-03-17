import { OrderPriceInfoPage } from './../../all-pages/order-price-info/order-price-info.page';
import { ItemPriceInfoPage } from './../../all-pages/item-price-info/item-price-info.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-product-status-content',
  templateUrl: './product-status-content.component.html',
  styleUrls: ['./product-status-content.component.scss'],
})
export class ProductStatusContentComponent implements OnInit {

  constructor(public modalController: ModalController) { }
  
  ngOnInit() {}
  async itemPriceModal() {
    const modal = await this.modalController.create({
      component: ItemPriceInfoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async orderPriceModal() {
    const modal = await this.modalController.create({
      component: OrderPriceInfoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  

}
