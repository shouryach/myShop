import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './all-components/footer/footer.component';
import { HeaderComponent } from './all-components/header/header.component';
import { MenuComponent } from './all-components/header/menu/menu.component';
import { MenuSocialComponent } from './all-components/header/menu-social/menu-social.component';
import { ProfileContentComponent } from './all-components/header/profile-content/profile-content.component';
import { MainMenuComponent } from './all-components/header/main-menu/main-menu.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, MenuComponent, MenuSocialComponent, ProfileContentComponent, MainMenuComponent],
  entryComponents: [],
  imports: [AppRoutingModule, BrowserModule,HttpClientModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot(), IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
