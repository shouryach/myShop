import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPassMessagePage } from './reset-pass-message.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPassMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPassMessagePageRoutingModule {}
