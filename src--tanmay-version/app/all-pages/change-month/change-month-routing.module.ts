import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeMonthPage } from './change-month.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeMonthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeMonthPageRoutingModule {}
