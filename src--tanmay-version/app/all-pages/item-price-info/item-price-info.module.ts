import { ItemPriceContentComponent } from './../../all-components/item-price-content/item-price-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPriceInfoPageRoutingModule } from './item-price-info-routing.module';

import { ItemPriceInfoPage } from './item-price-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPriceInfoPageRoutingModule
  ],
  declarations: [ItemPriceInfoPage, ItemPriceContentComponent]
})
export class ItemPriceInfoPageModule {}
