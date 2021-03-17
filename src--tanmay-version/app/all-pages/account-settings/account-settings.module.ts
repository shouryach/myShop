import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountSettingsPageRoutingModule } from './account-settings-routing.module';

import { AccountSettingsPage } from './account-settings.page';
import { AccountSettingsContentComponent } from '../../all-components/account-settings-content/account-settings-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountSettingsPageRoutingModule
  ],
  declarations: [AccountSettingsPage, AccountSettingsContentComponent]
})
export class AccountSettingsPageModule {}
