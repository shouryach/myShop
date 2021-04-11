import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/all-Services/product.service';

@Component({
  selector: 'app-shipped-content',
  templateUrl: './shipped-content.component.html',
  styleUrls: ['./shipped-content.component.scss'],
})
export class ShippedContentComponent implements OnInit {

  
  viewadd_pay: boolean = false;
  rotate: boolean = false;
  data: any;
  lineItems: any;
  flag: boolean = false;
  totalInt : number;
  discount : string;
  tax : string;
  mrp:string;
  constructor(private productService: ProductService) { }

  view_add(){
    this.viewadd_pay = !this.viewadd_pay;
    this.rotate = !this.rotate;
  }

  ngOnInit() {
    this.productService.getOrderDetails().subscribe(x => {
      this.data = x;
      console.log(this.data);
      console.log(this.data.length)



      this.data.forEach(i => {

        console.log(i.status);
        if (i.status === "processing") {
          this.flag = true;
          i.line_items.forEach(x => {
            console.log("Inside 2nd for loop: " + i.status);
            this.lineItems = x;
            console.log(x);


          });
          this.mrp = i.total;
          this.discount = i.discount_total;
          this.tax = i.total_tax;


          
        }

        


      });


    })
    console.log(parseInt(this.mrp))
    this.totalInt = (parseInt(this.mrp) - parseInt(this.discount) - parseInt(this.tax));
    console.log(this.totalInt.toString());

  }

}
