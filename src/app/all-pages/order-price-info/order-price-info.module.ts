import { OrderPriceContentComponent } from './../../all-components/order-price-content/order-price-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPriceInfoPageRoutingModule } from './order-price-info-routing.module';

import { OrderPriceInfoPage } from './order-price-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPriceInfoPageRoutingModule
  ],
  declarations: [OrderPriceInfoPage, OrderPriceContentComponent]
})
export class OrderPriceInfoPageModule {}
