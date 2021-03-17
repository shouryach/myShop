import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupProfilePageRoutingModule } from './setup-profile-routing.module';

import { SetupProfilePage } from './setup-profile.page';
import { SetupProfileContentComponent } from '../../all-components/setup-profile-content/setup-profile-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupProfilePageRoutingModule
  ],
  declarations: [SetupProfilePage, SetupProfileContentComponent]
})
export class SetupProfilePageModule {}
