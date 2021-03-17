import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpassPageRoutingModule } from './forgotpass-routing.module';

import { ForgotpassPage } from './forgotpass.page';
import { ForgotPassContentComponent } from '../../all-components/forgot-pass-content/forgot-pass-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpassPageRoutingModule
  ],
  declarations: [ForgotpassPage, ForgotPassContentComponent]
})
export class ForgotpassPageModule {}
