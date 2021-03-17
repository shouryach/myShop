import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/all-Services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  userForm: FormGroup;
 
  user = this.api.getCurrentUser();

  constructor(private api: ApiService,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {
      this.user.subscribe(user => {
        if (user) {
          console.log(user);
        } else {
          console.log("empty user", user);
        }
      });
     }

  ngOnInit() {
    this.userForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      username: ['', Validators.required],
      email: '',
      password: ['', Validators.required]
    });   
  }

  signUp() {
    this.api.signUp(this.userForm.value.username, this.userForm.value.email, this.userForm.value.password).subscribe(
      async res => {
          const toast = await this.toastCtrl.create({
            message: res['message'],
            duration: 3000
          });
          toast.present();
      },
      err => {
        this.showError(err);
        console.log(err);
      }
    );
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


