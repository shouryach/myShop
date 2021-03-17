import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
import { LoginDetailsComponent } from '../login-details.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginDetailsComponent
      }
    ]),
    ReactiveFormsModule
  ],
  declarations: [LoginDetailsComponent]
})
export class LoginFormModule{}