import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopDetailsPageRoutingModule } from './shop-details-routing.module';

import { ShopDetailsPage } from './shop-details.page';
import { ShopDetailsContentComponent } from 'src/app/all-components/shop-details-content/shop-details-content.component';
import { SimilarProductsComponent } from 'src/app/all-components/shop-details-content/similar-products/similar-products.component';
import { RetailerLikedComponent } from 'src/app/all-components/shop-details-content/retailer-liked/retailer-liked.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopDetailsPageRoutingModule
  ],
  declarations: [ShopDetailsPage, ShopDetailsContentComponent, SimilarProductsComponent, RetailerLikedComponent]
})
export class ShopDetailsPageModule {}
