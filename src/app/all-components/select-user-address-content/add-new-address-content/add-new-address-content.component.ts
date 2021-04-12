import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
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
  count:any;
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('count').then((val) => {
      console.log('Your count is', val);
      this.count = val;
    });
  }
  
  onSubmit() {
    console.log(
      this.myForm.value
    )
  }
  addpost(namedata, mobiledata, pindata, addressdata, towndata, districtdata,statedata, homedata, workdata){
    console.log(namedata, mobiledata, pindata, addressdata, towndata, districtdata,statedata, homedata, workdata);
    this.parentPost.push(namedata, mobiledata, pindata, addressdata, towndata, districtdata,statedata, homedata, workdata);

    var innerObj = {};
    innerObj['billing_first_name'] = namedata;
    innerObj['billing_phone'] = mobiledata;
    innerObj['billing_address_1'] = addressdata;
    innerObj['billing_state'] = statedata;
    innerObj['billing_postcode'] = pindata;
    const substring = "useraddress_"+this.count;

    this.storage.set(substring,innerObj);

  }

}
