import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPriceInfoPage } from './order-price-info.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPriceInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPriceInfoPageRoutingModule {}
