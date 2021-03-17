import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { RegisterDetailsComponent } from '../../all-components/register-details/register-details.component';
import { RegisterHeaderComponent } from '../../all-components/register-details/register-header/register-header.component';
import { RegisterSocialComponent } from '../../all-components/register-details/register-social/register-social.component';
import { RegisterFormComponent } from '../../all-components/register-details/register-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage, RegisterDetailsComponent, RegisterHeaderComponent, RegisterSocialComponent, RegisterFormComponent]
})
export class SignupPageModule {}
