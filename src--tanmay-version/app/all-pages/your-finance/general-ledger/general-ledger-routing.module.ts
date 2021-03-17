import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralLedgerPage } from './general-ledger.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralLedgerPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralLedgerPageRoutingModule {}
