import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippedPageRoutingModule } from './shipped-routing.module';

import { ShippedPage } from './shipped.page';
import { ShippedContentComponent } from 'src/app/all-components/your-orders-content/shipped-content/shipped-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippedPageRoutingModule
  ],
  declarations: [ShippedPage, ShippedContentComponent]
})
export class ShippedPageModule {}
