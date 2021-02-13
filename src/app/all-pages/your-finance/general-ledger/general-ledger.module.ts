import { GeneralLedgerContentComponent } from './../../../all-components/your-finance-content/general-ledger-content/general-ledger-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralLedgerPageRoutingModule } from './general-ledger-routing.module';

import { GeneralLedgerPage } from './general-ledger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralLedgerPageRoutingModule
  ],
  declarations: [GeneralLedgerPage, GeneralLedgerContentComponent]
})
export class GeneralLedgerPageModule {}
