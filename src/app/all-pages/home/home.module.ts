
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { HeaderCommonWidgetComponent } from '../../all-components/header-common-widget/header-common-widget.component';
import { HomePageContentsComponent } from 'src/app/all-components/home-page-contents/home-page-contents.component';
import { AdBannerSliderOneComponent } from 'src/app/all-components/home-page-contents/ad-banner-slider-one/ad-banner-slider-one.component';
import { AdBannerSliderTwoComponent } from 'src/app/all-components/home-page-contents/ad-banner-slider-two/ad-banner-slider-two.component';
import { AdBigComponent } from 'src/app/all-components/home-page-contents/ad-big/ad-big.component';
import { BankAdComponent } from 'src/app/all-components/home-page-contents/bank-ad/bank-ad.component';
import { BannerTopCarouselComponent } from 'src/app/all-components/home-page-contents/banner-top-carousel/banner-top-carousel.component';
import { BannerTopSlideComponent } from 'src/app/all-components/home-page-contents/banner-top-slide/banner-top-slide.component';
import { BestDealsComponent } from 'src/app/all-components/home-page-contents/best-deals/best-deals.component';
import { CategoryBrandProductComponent } from 'src/app/all-components/home-page-contents/category-brand-product/category-brand-product.component';
import { DiscountTopBrandsComponent } from 'src/app/all-components/home-page-contents/discount-top-brands/discount-top-brands.component';
import { LatestCheckoutComponent } from 'src/app/all-components/home-page-contents/latest-checkout/latest-checkout.component';
import { LatestItemComponent } from 'src/app/all-components/home-page-contents/latest-checkout/latest-item/latest-item.component';
import { MostShopedDetailsComponent } from 'src/app/all-components/home-page-contents/most-shoped-details/most-shoped-details.component';
import { ShopedItemsComponent } from 'src/app/all-components/home-page-contents/most-shoped-details/shoped-items/shoped-items.component';
import { NewShopAdComponent } from 'src/app/all-components/home-page-contents/new-shop-ad/new-shop-ad.component';
import { ProductSliderComponent } from 'src/app/all-components/home-page-contents/product-slider/product-slider.component';
import { FavDetailsComponent } from 'src/app/all-components/home-page-contents/top-brands/fav-details/fav-details.component';
import { TopBrandsComponent } from 'src/app/all-components/home-page-contents/top-brands/top-brands.component';
import { WearDetailsComponent } from 'src/app/all-components/home-page-contents/top-brands/wear-details/wear-details.component';
import { BottomWearDetailsComponent } from 'src/app/all-components/home-page-contents/top-category/bottom-wear-details/bottom-wear-details.component';
import { FormalWearDetailsComponent } from 'src/app/all-components/home-page-contents/top-category/formal-wear-details/formal-wear-details.component';
import { TopCategoryComponent } from 'src/app/all-components/home-page-contents/top-category/top-category.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule
  ],
  exports:[
    SharedModule,
  ],
  declarations: [
    HomePage,
    HeaderCommonWidgetComponent,
    HomePageContentsComponent,
    BannerTopCarouselComponent,
    BannerTopSlideComponent, 
    AdBannerSliderOneComponent, 
    AdBannerSliderTwoComponent,
    BankAdComponent,
    NewShopAdComponent,
    ProductSliderComponent,
    TopBrandsComponent,
    FavDetailsComponent,
    WearDetailsComponent,
    TopCategoryComponent,
    FormalWearDetailsComponent,
    BottomWearDetailsComponent,
    MostShopedDetailsComponent,
    ShopedItemsComponent,
    CategoryBrandProductComponent,
    DiscountTopBrandsComponent,
    AdBigComponent,
    LatestCheckoutComponent,
    LatestItemComponent,
    BestDealsComponent,
  ]
})
export class HomePageModule {}
