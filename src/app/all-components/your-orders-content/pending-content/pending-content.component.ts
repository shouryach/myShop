import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/all-Services/product.service';

@Component({
  selector: 'app-pending-content',
  templateUrl: './pending-content.component.html',
  styleUrls: ['./pending-content.component.scss'],
})
export class PendingContentComponent implements OnInit {

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
        if (i.status === "pending") {
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
