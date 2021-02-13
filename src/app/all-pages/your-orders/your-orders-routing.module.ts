import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YourOrdersPage } from './your-orders.page';

const routes: Routes = [
  {
    path: '',
    component: YourOrdersPage,
    children: [
      {
        path: 'all-orders',
        loadChildren: () => import('../../all-pages/your-orders/all/all.module').then(m => m.AllPageModule)
      },
      {
        path: 'pending',
        loadChildren: () => import('./pending/pending.module').then( m => m.PendingPageModule)
      },
      {
        path: 'delivered',
        loadChildren: () => import('./delivered/delivered.module').then( m => m.DeliveredPageModule)
      },
      {
        path: 'cancelled',
        loadChildren: () => import('./cancelled/cancelled.module').then( m => m.CancelledPageModule)
      },
      {
        path: 'shipped',
        loadChildren: () => import('./shipped/shipped.module').then( m => m.ShippedPageModule)
      },
      {
        path: '',
        redirectTo: '/your-orders/all-orders',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/your-orders/all-orders',
    pathMatch: 'full'
  },   
  
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourOrdersPageRoutingModule {}
