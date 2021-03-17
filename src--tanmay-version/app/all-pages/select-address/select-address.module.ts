import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectAddressPageRoutingModule } from './select-address-routing.module';

import { SelectAddressPage } from './select-address.page';
import { SelectAddressContentComponent } from '../../all-components/select-address-content/select-address-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectAddressPageRoutingModule
  ],
  declarations: [SelectAddressPage, SelectAddressContentComponent]
})
export class SelectAddressPageModule {}
