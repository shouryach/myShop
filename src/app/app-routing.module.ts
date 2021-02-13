import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'entrypoint',
    loadChildren: () => import('./all-pages/entrypoint/entrypoint.module').then( m => m.EntrypointPageModule)
  },
  {
    path: '',
    redirectTo: 'entrypoint',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./all-pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./all-pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'verify-otp',
    loadChildren: () => import('./all-pages/verify-with-otp/verify-with-otp.module').then( m => m.VerifyWithOtpPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./all-pages/update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
  },
  {
    path: 'pasword-reset',
    loadChildren: () => import('./all-pages/reset-pass-message/reset-pass-message.module').then( m => m.ResetPassMessagePageModule)
  },
  {
    path: 'auth-signup',
    loadChildren: () => import('./all-pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verify-otp-register',
    loadChildren: () => import('./all-pages/verify-otp-register/verify-otp-register.module').then( m => m.VerifyOtpRegisterPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./all-pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./all-pages/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./all-pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./all-pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'sub-category',
    loadChildren: () => import('./all-pages/sub-category/sub-category.module').then( m => m.SubCategoryPageModule)
  },
  {
    path: 'profile-setting',
    loadChildren: () => import('./all-pages/profile-setting/profile-setting.module').then( m => m.ProfileSettingPageModule)
  },
  {
    path: 'user-account',
    loadChildren: () => import('./all-pages/user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
  {
    path: 'business-details',
    loadChildren: () => import('./all-pages/business-details/business-details.module').then( m => m.BusinessDetailsPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./all-pages/account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
  {
    path: 'select-address',
    loadChildren: () => import('./all-pages/select-address/select-address.module').then( m => m.SelectAddressPageModule)
  },
  {
    path: 'add-new-address',
    loadChildren: () => import('./all-pages/add-new-address/add-new-address.module').then( m => m.AddNewAddressPageModule)
  },
  {
    path: 'your-orders',
    loadChildren: () => import('./all-pages/your-orders/your-orders.module').then( m => m.YourOrdersPageModule)
  },
  {
    path: 'setup-profile',
    loadChildren: () => import('./all-pages/setup-profile/setup-profile.module').then( m => m.SetupProfilePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./all-pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'shop-details',
    loadChildren: () => import('./all-pages/shop-details/shop-details.module').then( m => m.ShopDetailsPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./all-pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'shopping-bag',
    loadChildren: () => import('./all-pages/shopping-bag/shopping-bag.module').then( m => m.ShoppingBagPageModule)
  },
  {
    path: 'select-user-address',
    loadChildren: () => import('./all-pages/select-user-address/select-user-address.module').then( m => m.SelectUserAddressPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./all-pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'payment-type',
    loadChildren: () => import('./all-pages/payment-type/payment-type.module').then( m => m.PaymentTypePageModule)
  },
  {
    path: 'add-bank-details',
    loadChildren: () => import('./all-pages/add-bank-details/add-bank-details.module').then( m => m.AddBankDetailsPageModule)
  },
  {
    path: 'add-new-bank-details',
    loadChildren: () => import('./all-pages/add-new-bank-details/add-new-bank-details.module').then( m => m.AddNewBankDetailsPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./all-pages/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'help-center',
    loadChildren: () => import('./all-pages/help-center/help-center.module').then( m => m.HelpCenterPageModule)
  },
  {
    path: 'change-month',
    loadChildren: () => import('./all-pages/change-month/change-month.module').then( m => m.ChangeMonthPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./all-pages/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'manage-account',
    loadChildren: () => import('./all-pages/manage-account/manage-account.module').then( m => m.ManageAccountPageModule)
  },
  {
    path: 'other-account',
    loadChildren: () => import('./all-pages/other-account/other-account.module').then( m => m.OtherAccountPageModule)
  },
  {
    path: 'raise-query',
    loadChildren: () => import('./all-pages/help-center-purchase/help-center-purchase.module').then( m => m.HelpCenterPurchasePageModule)
  },
  {
    path: 'product-status',
    loadChildren: () => import('./all-pages/product-status/product-status.module').then( m => m.ProductStatusPageModule)
  },
  {
    path: 'item-price-info',
    loadChildren: () => import('./all-pages/item-price-info/item-price-info.module').then( m => m.ItemPriceInfoPageModule)
  },
  {
    path: 'order-price-info',
    loadChildren: () => import('./all-pages/order-price-info/order-price-info.module').then( m => m.OrderPriceInfoPageModule)
  },
  {
    path: 'your-finance',
    loadChildren: () => import('./all-pages/your-finance/your-finance.module').then( m => m.YourFinancePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./all-pages/search/search.module').then( m => m.SearchPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
