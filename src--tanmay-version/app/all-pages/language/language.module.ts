import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagePageRoutingModule } from './language-routing.module';

import { LanguagePage } from './language.page';
import { LanguageContentComponent } from 'src/app/all-components/language-content/language-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagePageRoutingModule
  ],
  declarations: [LanguagePage, LanguageContentComponent]
})
export class LanguagePageModule {}
