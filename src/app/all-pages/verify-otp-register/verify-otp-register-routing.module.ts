import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyOtpRegisterPage } from './verify-otp-register.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyOtpRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyOtpRegisterPageRoutingModule {}
