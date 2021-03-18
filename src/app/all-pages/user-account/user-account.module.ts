import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAccountPageRoutingModule } from './user-account-routing.module';

import { UserAccountPage } from './user-account.page';
import { UserAccountDetailsContentComponent } from 'src/app/all-components/user-account-details-content/user-account-details-content.component';
import { UserAccountProPicComponent } from 'src/app/all-components/user-account-details-content/user-account-pro-pic/user-account-pro-pic.component';
import { UserAccountFormComponent } from 'src/app/all-components/user-account-details-content/user-account-form/user-account-form.component';
import { UserAccountSecurityComponent } from 'src/app/all-components/user-account-details-content/user-account-security/user-account-security.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserAccountPageRoutingModule
  ],
  declarations: [UserAccountPage, UserAccountDetailsContentComponent, UserAccountProPicComponent, UserAccountFormComponent, UserAccountSecurityComponent]
})
export class UserAccountPageModule {}
