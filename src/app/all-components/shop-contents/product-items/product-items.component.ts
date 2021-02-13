import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
})
export class ProductItemsComponent implements OnInit {

  activelike: boolean = false;
  constructor() { }

  active(){
    this.activelike = !this.activelike;
  }

  ngOnInit() {}

}
