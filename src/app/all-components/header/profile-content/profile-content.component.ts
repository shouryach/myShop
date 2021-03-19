import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/all-Services/api.service';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss'],
})
export class ProfileContentComponent implements OnInit {



  constructor(private api: ApiService) { }

  user: any;
  hide = false;
  email : String;
  userDetail : any;
  profilename : String;

  ngOnInit() {

    this.user = this.api.getCurrentUser();
    this.user.subscribe(user => {
      if (user) {
        console.log("User s this ")
        console.log(user);
        this.hide = true;

        console.log(user.user_email);
        this.email = user.user_email;
        this.api.getUserByEmail(this.email).subscribe((res: any) => {
          this.userDetail = res;
          this.profilename = this.userDetail[0].display_name;
        });
      }
      else {
        console.log("empty user", user);
        this.hide = false;
      }



    });
  }

}
