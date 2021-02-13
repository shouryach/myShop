import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyOtpRegisterPageRoutingModule } from './verify-otp-register-routing.module';

import { VerifyOtpRegisterPage } from './verify-otp-register.page';

import { VerifyOtpRegisterContentComponent } from '../../all-components/verify-otp-register-content/verify-otp-register-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyOtpRegisterPageRoutingModule
  ],
  declarations: [VerifyOtpRegisterPage, VerifyOtpRegisterContentComponent]
})
export class VerifyOtpRegisterPageModule {}
