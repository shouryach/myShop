import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippedPage } from './shipped.page';

const routes: Routes = [
  {
    path: '',
    component: ShippedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippedPageRoutingModule {}
