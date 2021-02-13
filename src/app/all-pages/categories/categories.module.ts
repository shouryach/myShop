import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesContentsComponent } from 'src/app/all-components/categories-contents/categories-contents.component';
import { SubCategoryContentsComponent } from 'src/app/all-components/sub-category-contents/sub-category-contents.component';
import { AdBannerSliderOneComponent } from 'src/app/all-components/home-page-contents/ad-banner-slider-one/ad-banner-slider-one.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CategoriesPageRoutingModule
  ],
  declarations: [CategoriesPage, CategoriesContentsComponent, SubCategoryContentsComponent, AdBannerSliderOneComponent]
})
export class CategoriesPageModule {}
