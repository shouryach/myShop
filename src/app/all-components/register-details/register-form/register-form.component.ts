import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  phoneNumber : string = ''

  ngOnInit() {}

  sendOtp(){

    console.log("In Register class "+this.phoneNumber);
  }

}
