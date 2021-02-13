import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPassMessagePageRoutingModule } from './reset-pass-message-routing.module';

import { ResetPassMessagePage } from './reset-pass-message.page';
import { ResetMessageContentComponent } from '../../all-components/reset-message-content/reset-message-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPassMessagePageRoutingModule
  ],
  declarations: [ResetPassMessagePage, ResetMessageContentComponent]
})
export class ResetPassMessagePageModule {}
