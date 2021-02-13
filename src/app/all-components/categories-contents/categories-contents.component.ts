import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-contents',
  templateUrl: './categories-contents.component.html',
  styleUrls: ['./categories-contents.component.scss'],
})
export class CategoriesContentsComponent implements OnInit {

  active1: boolean = false;
  active2: boolean = false;
  active3: boolean = false;
  sub_cat: boolean = false;
  sub_cat2: boolean = false;
  sub_cat3: boolean = false;
  constructor() { }
  
  sub_click(){
    this.active1 = !this.active1;
    this.active2 = false;
    this.active3 = false;
    this.sub_cat = !this.sub_cat;
    this.sub_cat2 = false;
    this.sub_cat3 = false;
  }
  sub_click2(){
    this.active2 = !this.active2;
    this.active1 = false;
    this.active3 = false;
    this.sub_cat = false;
    this.sub_cat2 = !this.sub_cat2;
    this.sub_cat3 = false;
  }
  sub_click3(){
    this.active3 = !this.active3;
    this.active1 = false;
    this.active2 = false;
    this.sub_cat = false;
    this.sub_cat2 = false;
    this.sub_cat3=!this.sub_cat3;
  }


  ngOnInit() {}

}
