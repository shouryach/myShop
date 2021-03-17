import { FilterComponent } from './../../all-components/shop-contents/top-details/filter/filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import { SharedModule } from '../../shared/shared.module';
import { ShopContentsComponent } from 'src/app/all-components/shop-contents/shop-contents.component';
import { TopDetailsComponent } from 'src/app/all-components/shop-contents/top-details/top-details.component';
import { ProductItemsComponent } from 'src/app/all-components/shop-contents/product-items/product-items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ShopPageRoutingModule
  ],
  declarations: [ShopPage, ShopContentsComponent,TopDetailsComponent,ProductItemsComponent, FilterComponent
    ,]
})
export class ShopPageModule {}
