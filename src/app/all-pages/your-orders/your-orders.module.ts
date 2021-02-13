import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourOrdersPageRoutingModule } from './your-orders-routing.module';

import { YourOrdersPage } from './your-orders.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { OdersSearchComponent } from 'src/app/all-components/your-orders-content/oders-search/oders-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourOrdersPageRoutingModule,
    SharedModule
  ],
  declarations: [YourOrdersPage, OdersSearchComponent]
})
export class YourOrdersPageModule {}
