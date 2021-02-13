import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemPriceInfoPage } from './item-price-info.page';

const routes: Routes = [
  {
    path: '',
    component: ItemPriceInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemPriceInfoPageRoutingModule {}
