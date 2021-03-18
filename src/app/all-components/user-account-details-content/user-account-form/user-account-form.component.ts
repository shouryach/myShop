import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/all-Services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-account-form',
  templateUrl: './user-account-form.component.html',
  styleUrls: ['./user-account-form.component.scss'],
})
export class UserAccountFormComponent implements OnInit {
  user: any;
  userDetail: any;
  email: string;
  updateForm: FormGroup;


  constructor(private api: ApiService, private httpClient: HttpClient, private fb: FormBuilder) {

  }


  //name: this.updateForm.formc
  // useremail: FormControl;
  // mobile: FormControl;
  // compnay: FormControl;
  // pin: FormControl;

  ngOnInit() {

    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      company: ['', Validators.required],
      pin: ['', Validators.required]
    });


    this.user = this.api.getCurrentUser();
    this.user.subscribe(user => {
      if (user) {
        console.log("User s this ")
        console.log(user);
        console.log(user.user_email);
        this.email = user.user_email;
        this.api.getUserByEmail(this.email).subscribe((res: any) => {
          this.userDetail = res;
          console.log(this.userDetail[0]);
          this.userDetail.forEach((x) => {
            this.updateForm.setValue({ name: x.display_name, email: x.user_email, mobile: x.billing_phone, company: x.shipping_company, pin: x.shipping_postcode })
          })
        })
      } else {
        console.log("empty user", user);
      }
    });


  }

  notEditMode = true;
  onTogglenotEditMode() {
    this.notEditMode = !this.notEditMode;
  }

  saveData() {
    console.log(this.updateForm.value.name + " " + this.updateForm.value.email + " " + this.updateForm.value.mobile + " " + this.updateForm.value.company + " " + this.updateForm.value.pin);
    this.api.saveData(this.updateForm.value.name, this.email, this.updateForm.value.mobile, this.updateForm.value.company, this.updateForm.value.pin)

  }

}
