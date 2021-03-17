import { FilterComponent } from './filter/filter.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-top-details',
  templateUrl: './top-details.component.html',
  styleUrls: ['./top-details.component.scss'],
})
export class TopDetailsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  async filter() {
    const modal = await this.modalController.create({
      component: FilterComponent,
      cssClass: 'filter-class'
    });
    return await modal.present();
  }

  ngOnInit() {}

}
