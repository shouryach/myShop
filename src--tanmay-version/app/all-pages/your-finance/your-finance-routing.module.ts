import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourFinancePage } from './your-finance.page';

const routes: Routes = [
  {
    path: '',
    component: YourFinancePage,
    children: [
      {
        path: '',
        redirectTo: '/your-finance/overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
      },
      {
        path: 'general-ledger',
        loadChildren: () => import('./general-ledger/general-ledger.module').then( m => m.GeneralLedgerPageModule)
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/your-finance/overview',
    pathMatch: 'full'
  }, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourFinancePageRoutingModule {}
