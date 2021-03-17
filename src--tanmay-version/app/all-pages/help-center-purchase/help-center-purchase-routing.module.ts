import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpCenterPurchasePage } from './help-center-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: HelpCenterPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpCenterPurchasePageRoutingModule {}
