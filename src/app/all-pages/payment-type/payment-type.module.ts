import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentTypePageRoutingModule } from './payment-type-routing.module';

import { PaymentTypePage } from './payment-type.page';
import { PaymentTypeContentComponent } from 'src/app/all-components/payment-type-content/payment-type-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentTypePageRoutingModule
  ],
  declarations: [PaymentTypePage, PaymentTypeContentComponent]
})
export class PaymentTypePageModule {}
