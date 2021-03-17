import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBankDetailsPageRoutingModule } from './add-bank-details-routing.module';

import { AddBankDetailsPage } from './add-bank-details.page';
import { AddBankDetailsContentComponent } from 'src/app/all-components/add-bank-details-content/add-bank-details-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBankDetailsPageRoutingModule
  ],
  declarations: [AddBankDetailsPage, AddBankDetailsContentComponent]
})
export class AddBankDetailsPageModule {}
