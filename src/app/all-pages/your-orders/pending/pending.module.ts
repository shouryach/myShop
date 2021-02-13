import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingPageRoutingModule } from './pending-routing.module';

import { PendingPage } from './pending.page';
import { PendingContentComponent } from 'src/app/all-components/your-orders-content/pending-content/pending-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingPageRoutingModule
  ],
  declarations: [PendingPage, PendingContentComponent]
})
export class PendingPageModule {}
