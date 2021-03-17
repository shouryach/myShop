import { HelpCenterPurchaseContentComponent } from './../../all-components/help-center-purchase-content/help-center-purchase-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpCenterPurchasePageRoutingModule } from './help-center-purchase-routing.module';

import { HelpCenterPurchasePage } from './help-center-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpCenterPurchasePageRoutingModule
  ],
  declarations: [HelpCenterPurchasePage, HelpCenterPurchaseContentComponent]
})
export class HelpCenterPurchasePageModule {}
