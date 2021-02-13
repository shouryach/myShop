import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  price_content: boolean = true;
  mcq_content: boolean = false;
  fabric_content: boolean = false;
  clothing_content: boolean = false;
  sleeve_content: boolean = false;
  active1: boolean = false;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;
  active5: boolean = false;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.active1 = true;
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  price(){
    this.price_content = true;
    this.mcq_content = false;
    this.fabric_content = false;
    this.clothing_content = false;
    this.sleeve_content = false;
    this.active1 = true;
    this.active2 = false;
    this.active3 = false;
    this.active4 = false;
    this.active5 = false;
  }
  mcq(){
    this.mcq_content = true;
    this.price_content = false;
    this.fabric_content = false;
    this.clothing_content = false;
    this.sleeve_content = false;
    this.active1 = false;
    this.active2 = true;
    this.active3 = false;
    this.active4 = false;
    this.active5 = false;
  }
  fabric(){
    this.fabric_content = true;
    this.mcq_content = false;
    this.price_content = false;
    this.clothing_content = false;
    this.sleeve_content = false;
    this.active1 = false;
    this.active2 = false;
    this.active3 = true;
    this.active4 = false;
    this.active5 = false;
  }
  clothing(){
    this.clothing_content = true;
    this.mcq_content = false;
    this.fabric_content = false;
    this.price_content = false;
    this.sleeve_content = false;
    this.active1 = false;
    this.active2 = false;
    this.active3 = false;
    this.active4 = true;
    this.active5 = false;
  }
  sleeve(){
    this.sleeve_content = true;
    this.mcq_content = false;
    this.fabric_content = false;
    this.clothing_content = false;
    this.price_content = false;
    this.active1 = false;
    this.active2 = false;
    this.active3 = false;
    this.active4 = false;
    this.active5 = true;
  }
  private knobValues: Object = {
    upper:10000,
    lower:1
  }

  

}
