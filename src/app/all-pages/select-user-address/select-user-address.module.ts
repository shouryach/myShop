import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectUserAddressPageRoutingModule } from './select-user-address-routing.module';

import { SelectUserAddressPage } from './select-user-address.page';
import { SelectAddressContentComponent } from 'src/app/all-components/select-address-content/select-address-content.component';
import { SelectUserAddressContentComponent } from 'src/app/all-components/select-user-address-content/select-user-address-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectUserAddressPageRoutingModule
  ],
  declarations: [SelectUserAddressPage, SelectUserAddressContentComponent]
})
export class SelectUserAddressPageModule {}
