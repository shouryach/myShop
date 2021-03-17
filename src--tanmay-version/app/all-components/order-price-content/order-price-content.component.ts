import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-price-content',
  templateUrl: './order-price-content.component.html',
  styleUrls: ['./order-price-content.component.scss'],
})
export class OrderPriceContentComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
