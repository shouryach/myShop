import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/all-Services/product.service';

@Component({
  selector: 'app-delivered-content',
  templateUrl: './delivered-content.component.html',
  styleUrls: ['./delivered-content.component.scss'],
})
export class DeliveredContentComponent implements OnInit {

  data: any;
  lineItems: any;
  flag: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getOrderDetails().subscribe(x => {
      this.data = x;
      console.log(this.data);
      console.log(this.data.length)



      this.data.forEach(i => {

        console.log(i.status);
        if (i.status === "completed") {
          this.flag = true;
          i.line_items.forEach(x => {
            console.log("Inside 2nd for loop: " + i.status);
            this.lineItems = x;
            console.log(x);


          });
        }




      });


    })

  }

}
