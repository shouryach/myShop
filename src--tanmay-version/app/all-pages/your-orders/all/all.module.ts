import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPageRoutingModule } from './all-routing.module';

import { AllPage } from './all.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllContentComponent } from 'src/app/all-components/your-orders-content/all-content/all-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPageRoutingModule,
    SharedModule
  ],
  declarations: [AllPage, AllContentComponent]
})
export class AllPageModule {}
