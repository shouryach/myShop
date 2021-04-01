import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-address-content',
  templateUrl: './add-new-address-content.component.html',
  styleUrls: ['./add-new-address-content.component.scss'],
})
export class AddNewAddressContentComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  namedata = '';
  mobiledata = '';
  pindata= '';
  addressdata= '';
  towndata='';
  districtdata='';
  statedata='';
  homedata='';
  workdata='';
  parentPost: any[]=[];
  constructor() { }

  ngOnInit() {}
  
  onSubmit() {
    console.log(
      this.myForm.value
    )
  }
  addpost(namedata, mobiledata, pindata, addressdata, towndata, districtdata,statedata, homedata, workdata){
    console.log(namedata, mobiledata, pindata, addressdata, towndata, districtdata,statedata, homedata, workdata);
    this.parentPost.push(namedata, mobiledata, pindata, addressdata, towndata, districtdata,statedata, homedata, workdata);
  }

}
