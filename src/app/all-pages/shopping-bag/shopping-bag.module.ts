import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingBagPageRoutingModule } from './shopping-bag-routing.module';

import { ShoppingBagPage } from './shopping-bag.page';
import { ShoppingBagContentComponent } from 'src/app/all-components/shopping-bag-content/shopping-bag-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingBagPageRoutingModule
  ],
  declarations: [ShoppingBagPage, ShoppingBagContentComponent]
})
export class ShoppingBagPageModule {}
