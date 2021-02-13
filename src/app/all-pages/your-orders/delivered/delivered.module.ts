import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveredPageRoutingModule } from './delivered-routing.module';

import { DeliveredPage } from './delivered.page';
import { DeliveredContentComponent } from 'src/app/all-components/your-orders-content/delivered-content/delivered-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveredPageRoutingModule
  ],
  declarations: [DeliveredPage, DeliveredContentComponent]
})
export class DeliveredPageModule {}
