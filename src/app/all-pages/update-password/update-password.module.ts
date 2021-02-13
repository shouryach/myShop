import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePasswordPageRoutingModule } from './update-password-routing.module';

import { UpdatePasswordPage } from './update-password.page';
import { UpdatePaswordContentComponent } from '../../all-components/update-pasword-content/update-pasword-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePasswordPageRoutingModule
  ],
  declarations: [UpdatePasswordPage, UpdatePaswordContentComponent]
})
export class UpdatePasswordPageModule {}
