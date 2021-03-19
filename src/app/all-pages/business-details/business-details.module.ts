import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessDetailsPageRoutingModule } from './business-details-routing.module';

import { BusinessDetailsPage } from './business-details.page';
import { BusinessDetailsContentComponent } from '../../all-components/business-details-content/business-details-content.component';
import { EditListComponent } from '../../all-components/business-details-content/edit-list/edit-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BusinessDetailsPage, BusinessDetailsContentComponent, EditListComponent]
})
export class BusinessDetailsPageModule {}
