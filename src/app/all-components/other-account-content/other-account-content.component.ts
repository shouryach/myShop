import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-account-content',
  templateUrl: './other-account-content.component.html',
  styleUrls: ['./other-account-content.component.scss'],
})
export class OtherAccountContentComponent implements OnInit {

  oneContent: boolean = false;
  twoContent: boolean = false;
  threeContent: boolean = false;
  fourContent: boolean = false;
  fiveContent: boolean = false;
  sixContent: boolean = false;
  sevenContent: boolean = false;

  rotateone: boolean = false;
  rotatetwo: boolean = false;
  rotatethree: boolean = false;
  rotatefour: boolean = false;
  rotatefive: boolean = false;
  rotatesix: boolean = false;
  rotateseven: boolean = false;
  constructor() { }

  ngOnInit() {}

  one(){
    this.oneContent = !this.oneContent
    this.twoContent = false;
    this.threeContent = false;
    this.fourContent = false;
    this.fiveContent = false;
    this.sixContent = false;
    this.sevenContent = false;

    this.rotateone = !this.rotateone;
    this.rotatetwo = false;
    this.rotatethree = false;
    this.rotatefour = false;
    this.rotatefive = false;
    this.rotatesix = false;
    this.rotateseven = false;
  }
  two(){
    this.twoContent = !this.twoContent
    this.oneContent = false;
    this.threeContent = false;
    this.fourContent = false;
    this.fiveContent = false;
    this.sixContent = false;
    this.sevenContent = false;

    this.rotatetwo = !this.rotatetwo;
    this.rotateone = false;
    this.rotatethree = false;
    this.rotatefour = false;
    this.rotatefive = false;
    this.rotatesix = false;
    this.rotateseven = false;
  }
  three(){
    this.threeContent = !this.threeContent
    this.twoContent = false;
    this.oneContent = false;
    this.fourContent = false;
    this.fiveContent = false;
    this.sixContent = false;
    this.sevenContent = false;

    this.rotatethree = !this.rotatethree;
    this.rotateone = false;
    this.rotatetwo = false;
    this.rotatefour = false;
    this.rotatefive = false;
    this.rotatesix = false;
    this.rotateseven = false;
  }
  four(){
    this.fourContent = !this.fourContent
    this.oneContent = false;
    this.threeContent = false;
    this.twoContent = false;
    this.fiveContent = false;
    this.sixContent = false;
    this.sevenContent = false;

    this.rotatefour = !this.rotatefour;
    this.rotateone = false;
    this.rotatetwo = false;
    this.rotatethree = false;
    this.rotatefive = false;
    this.rotatesix = false;
    this.rotateseven = false;
  }
  five(){
    this.fiveContent = !this.fiveContent
    this.oneContent = false;
    this.threeContent = false;
    this.fourContent = false;
    this.twoContent = false;
    this.sixContent = false;
    this.sevenContent = false;

    this.rotatefive = !this.rotatefive;
    this.rotateone = false;
    this.rotatetwo = false;
    this.rotatethree = false;
    this.rotatefour = false;
    this.rotatesix = false;
    this.rotateseven = false;
  }

  six(){
    this.sixContent = !this.sixContent
    this.oneContent = false;
    this.threeContent = false;
    this.fourContent = false;
    this.twoContent = false;
    this.fiveContent = false;
    this.sevenContent = false;

    this.rotatesix = !this.rotatesix;
    this.rotateone = false;
    this.rotatetwo = false;
    this.rotatethree = false;
    this.rotatefour = false;
    this.rotatefive = false;
    this.rotateseven = false;
  }
  seven(){
    this.sevenContent = !this.sixContent
    this.oneContent = false;
    this.threeContent = false;
    this.fourContent = false;
    this.twoContent = false;
    this.fiveContent = false;
    this.sixContent = false;

    this.rotateseven = !this.rotateseven;
    this.rotateone = false;
    this.rotatetwo = false;
    this.rotatethree = false;
    this.rotatefour = false;
    this.rotatefive = false;
    this.rotatesix = false;
  }

}
