import { OtherAccountContentComponent } from './../../all-components/other-account-content/other-account-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherAccountPageRoutingModule } from './other-account-routing.module';

import { OtherAccountPage } from './other-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherAccountPageRoutingModule
  ],
  declarations: [OtherAccountPage, OtherAccountContentComponent]
})
export class OtherAccountPageModule {}
