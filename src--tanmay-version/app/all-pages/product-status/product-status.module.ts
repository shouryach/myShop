import { ProductStatusContentComponent } from './../../all-components/product-status-content/product-status-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductStatusPageRoutingModule } from './product-status-routing.module';

import { ProductStatusPage } from './product-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductStatusPageRoutingModule
  ],
  declarations: [ProductStatusPage, ProductStatusContentComponent]
})
export class ProductStatusPageModule {}
