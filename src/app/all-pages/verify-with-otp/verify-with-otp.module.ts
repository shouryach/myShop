import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyWithOtpPageRoutingModule } from './verify-with-otp-routing.module';

import { VerifyWithOtpPage } from './verify-with-otp.page';
import { VerifyWithOtpContentComponent } from '../../all-components/verify-with-otp-content/verify-with-otp-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyWithOtpPageRoutingModule
  ],
  declarations: [VerifyWithOtpPage, VerifyWithOtpContentComponent]
})
export class VerifyWithOtpPageModule {}
