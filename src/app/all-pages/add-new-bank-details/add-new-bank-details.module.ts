import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewBankDetailsPageRoutingModule } from './add-new-bank-details-routing.module';

import { AddNewBankDetailsPage } from './add-new-bank-details.page';
import { AdNewBankDetailsContentComponent } from 'src/app/all-components/ad-new-bank-details-content/ad-new-bank-details-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewBankDetailsPageRoutingModule
  ],
  declarations: [AddNewBankDetailsPage, AdNewBankDetailsContentComponent]
})
export class AddNewBankDetailsPageModule {}
