import { ChnageMonthContentComponent } from './../../all-components/chnage-month-content/chnage-month-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeMonthPageRoutingModule } from './change-month-routing.module';

import { ChangeMonthPage } from './change-month.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeMonthPageRoutingModule
  ],
  declarations: [ChangeMonthPage, ChnageMonthContentComponent]
})
export class ChangeMonthPageModule {}
