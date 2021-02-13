import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileSettingPageRoutingModule } from './profile-setting-routing.module';

import { ProfileSettingPage } from './profile-setting.page';
import { ProfileSettingsContentDetailsComponent } from 'src/app/all-components/profile-settings-content-details/profile-settings-content-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSettingPageRoutingModule
  ],
  declarations: [ProfileSettingPage, ProfileSettingsContentDetailsComponent]
})
export class ProfileSettingPageModule {}
