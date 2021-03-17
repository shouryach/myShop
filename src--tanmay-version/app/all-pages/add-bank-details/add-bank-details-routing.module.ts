import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBankDetailsPage } from './add-bank-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddBankDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBankDetailsPageRoutingModule {}
