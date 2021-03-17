import { YourFinanceContentComponent } from './../../all-components/your-finance-content/your-finance-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourFinancePageRoutingModule } from './your-finance-routing.module';

import { YourFinancePage } from './your-finance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourFinancePageRoutingModule
  ],
  declarations: [YourFinancePage, YourFinanceContentComponent]
})
export class YourFinancePageModule {}
