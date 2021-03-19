import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/all-Services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss'],
})
export class EditListComponent implements OnInit {

  user: any;
  userDetail: any;
  email: string;
  updateBusinessForm: FormGroup;

  constructor(private api: ApiService, private httpClient: HttpClient, private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.updateBusinessForm = this.fb.group({
      name: ['', Validators.required],
      year: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
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
            this.updateBusinessForm.setValue({ name: x.business_name, year: x.establishment_year, type: x.business_type, description: x.description })
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

  saveBusinessData() {
    console.log(this.updateBusinessForm.value.name + " " + this.email + " " + this.updateBusinessForm.value.year + " " + this.updateBusinessForm.value.type + " " + this.updateBusinessForm.value.description);
    this.api.saveBusinessData(this.updateBusinessForm.value.name, this.email, this.updateBusinessForm.value.year, this.updateBusinessForm.value.type, this.updateBusinessForm.value.description)
    this.onTogglenotEditMode();
  }

}
