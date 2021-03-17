import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductStatusPage } from './product-status.page';

const routes: Routes = [
  {
    path: '',
    component: ProductStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductStatusPageRoutingModule {}
