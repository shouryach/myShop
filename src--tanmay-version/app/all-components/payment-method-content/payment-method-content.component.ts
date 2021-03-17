import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method-content',
  templateUrl: './payment-method-content.component.html',
  styleUrls: ['./payment-method-content.component.scss'],
})
export class PaymentMethodContentComponent implements OnInit {

  oneContent: boolean = false;
  twoContent: boolean = false;
  threeContent: boolean = false;
  fourContent: boolean = false;
  fiveContent: boolean = false;

  rotateone: boolean = false;
  rotatetwo: boolean = false;
  rotatethree: boolean = false;
  rotatefour: boolean = false;
  rotatefive: boolean = false;
  constructor() { }

  ngOnInit() {}

  one(){
    this.oneContent = !this.oneContent
    this.twoContent = false;
    this.threeContent = false;
    this.fourContent = false;
    this.fiveContent = false;

    this.rotateone = !this.rotateone;
    this.rotatetwo = false;
    this.rotatethree = false;
    this.rotatefour = false;
    this.rotatefive = false;
  }
  two(){
    this.twoContent = !this.twoContent
    this.oneContent = false;
    this.threeContent = false;
    this.fourContent = false;
    this.fiveContent = false;

    this.rotatetwo = !this.rotatetwo;
    this.rotateone = false;
    this.rotatethree = false;
    this.rotatefour = false;
    this.rotatefive = false;
  }
  three(){
    this.threeContent = !this.threeContent
    this.twoContent = false;
    this.oneContent = false;
    this.fourContent = false;
    this.fiveContent = false;

    this.rotatethree = !this.rotatethree;
    this.rotateone = false;
    this.rotatetwo = false;
    this.rotatefour = false;
    this.rotatefive = false;
  }
  four(){
    this.fourContent = !this.fourContent
    this.oneContent = false;
    this.threeContent = false;
    this.twoContent = false;
    this.fiveContent = false;

    this.rotatefour = !this.rotatefour;
    this.rotateone = false;
    this.rotatetwo = false;
    this.rotatethree = false;
    this.rotatefive = false;
  }
  five(){
    this.fiveContent = !this.fiveContent
    this.oneContent = false;
    this.threeContent = false;
    this.fourContent = false;
    this.twoContent = false;

    this.rotatefive = !this.rotatefive;
    this.rotateone = false;
    this.rotatetwo = false;
    this.rotatethree = false;
    this.rotatefour = false;
  }

}
