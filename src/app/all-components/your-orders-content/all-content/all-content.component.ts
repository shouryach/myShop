import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/all-Services/product.service';

@Component({
  selector: 'app-all-content',
  templateUrl: './all-content.component.html',
  styleUrls: ['./all-content.component.scss'],
})
export class AllContentComponent implements OnInit {

  data: any;
  lineItems: any;
  flag :boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getOrderDetails().subscribe(x => {
      this.data = x;
      console.log(this.data);
      console.log(this.data.length)
      if (this.data.length == 0) {
        this.flag = false;
      }
      else {
        this.flag = true;
        this.data.forEach(i => {

          i.line_items.forEach(x => {

            this.lineItems = x;


          });


        });
      }

    })
  }

}
