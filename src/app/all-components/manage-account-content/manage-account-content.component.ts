import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-account-content',
  templateUrl: './manage-account-content.component.html',
  styleUrls: ['./manage-account-content.component.scss'],
})
export class ManageAccountContentComponent implements OnInit {

  oneContent: boolean = false;
  twoContent: boolean = false;
  threeContent: boolean = false;

  rotateone: boolean = false;
  rotatetwo: boolean = false;
  rotatethree: boolean = false;
  constructor() { }

  ngOnInit() {}

  one(){
    this.oneContent = !this.oneContent
    this.twoContent = false;
    this.threeContent = false;

    this.rotateone = !this.rotateone;
    this.rotatetwo = false;
    this.rotatethree = false;
  }
  two(){
    this.twoContent = !this.twoContent
    this.oneContent = false;
    this.threeContent = false;

    this.rotatetwo = !this.rotatetwo;
    this.rotateone = false;
    this.rotatethree = false;
  }
  three(){
    this.threeContent = !this.threeContent
    this.twoContent = false;
    this.oneContent = false;

    this.rotatethree = !this.rotatethree;
    this.rotateone = false;
    this.rotatetwo = false;
  }
 


}
