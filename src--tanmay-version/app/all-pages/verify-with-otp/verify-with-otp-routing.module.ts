import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyWithOtpPage } from './verify-with-otp.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyWithOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyWithOtpPageRoutingModule {}
