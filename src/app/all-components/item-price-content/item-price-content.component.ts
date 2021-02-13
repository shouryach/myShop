import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-item-price-content',
  templateUrl: './item-price-content.component.html',
  styleUrls: ['./item-price-content.component.scss'],
})
export class ItemPriceContentComponent implements OnInit {

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
