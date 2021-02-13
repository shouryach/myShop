import { PaymentMethodContentComponent } from './../../all-components/payment-method-content/payment-method-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentMethodPageRoutingModule } from './payment-method-routing.module';

import { PaymentMethodPage } from './payment-method.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentMethodPageRoutingModule
  ],
  declarations: [PaymentMethodPage, PaymentMethodContentComponent]
})
export class PaymentMethodPageModule {}
