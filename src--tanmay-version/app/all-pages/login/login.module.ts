import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginDetailsComponent } from '../../all-components/login-details/login-details.component';
import { LoginHeaderComponent } from '../../all-components/login-details/login-header/login-header.component';
import { LoginSocialComponent } from '../../all-components/login-details/login-social/login-social.component';
import { LoginFormComponent } from '../../all-components/login-details/login-form/login-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, LoginDetailsComponent, LoginHeaderComponent, LoginSocialComponent, LoginFormComponent]
})
export class LoginPageModule {}
