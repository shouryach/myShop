import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewAddressPageRoutingModule } from './add-new-address-routing.module';

import { AddNewAddressPage } from './add-new-address.page';
import { AddNewAddressContentComponent } from 'src/app/all-components/select-user-address-content/add-new-address-content/add-new-address-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewAddressPageRoutingModule
  ],
  declarations: [AddNewAddressPage, AddNewAddressContentComponent]
})
export class AddNewAddressPageModule {}
