import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectUserAddressPage } from './select-user-address.page';

const routes: Routes = [
  {
    path: '',
    component: SelectUserAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectUserAddressPageRoutingModule {}
