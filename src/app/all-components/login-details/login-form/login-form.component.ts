import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/all-Services/api.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
 
  user = this.api.getCurrentUser();

  constructor(private api: ApiService,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController, private router: Router) { 
      this.user.subscribe(user => {
        if (user) {
          console.log(user);
        } else {
          console.log("empty user", user);
        }
      });
    
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login() {
    console.log(this.loginForm.value.email+" "+this.loginForm.value.password)
    this.api.signIn(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      res => {},
      err => {
        this.showError(err);
      }
    );

    this.router.navigate(['/home']);
  }

  async openPwReset() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot password?',
      message: 'Enter your email or username to retrieve a new password',
      inputs: [
        {
          type: 'text',
          name: 'usernameOrEmail'
        }
      ],
      buttons: [
        {
          role: 'cancel',
          text: 'Back'
        },
        {
          text: 'Reset Password',
          handler: (data) => {
            this.resetPw(data['usernameOrEmail']);
          }
        }
      ]
    });
  
    await alert.present();
  }
 
  resetPw(usernameOrEmail) {
    this.api.resetPassword(usernameOrEmail).subscribe(
      async res => {
        const toast = await this.toastCtrl.create({
          message: res['message'],
          duration: 2000
        });
        toast.present();
      },
      err => {
        this.showError(err);
      }
    );
  }

  logout() {
    this.api.logout();
  }
 
  async showError(err) {
    const alert = await this.alertCtrl.create({
      header: err.error.code,
      subHeader: err.error.data.status,
      message: err.error.message,
      buttons: ['OK']
    });
    await alert.present();
  } 

}
