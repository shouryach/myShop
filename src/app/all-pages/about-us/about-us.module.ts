import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsPageRoutingModule } from './about-us-routing.module';

import { AboutUsPage } from './about-us.page';
import { AboutUsContentComponent } from 'src/app/all-components/about-us-content/about-us-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUsPageRoutingModule
  ],
  declarations: [AboutUsPage, AboutUsContentComponent]
})
export class AboutUsPageModule {}
