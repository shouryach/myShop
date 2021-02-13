import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewBankDetailsPage } from './add-new-bank-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewBankDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewBankDetailsPageRoutingModule {}
