import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/all-Services/api.service';
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
  totalInt: number;
  discount: string;
  tax: string;
  mrp: string;

  user: any;
  userDetail: any;
  email: string;
  name: string;
  address: string;

  date: string;

  constructor(private productService: ProductService, private api: ApiService) { }

  view_add() {
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
          this.date = i.date_created;
          this.date = this.date.substring(0, 10);
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
    this.user = this.api.getCurrentUser();
    this.user.subscribe(user => {
      if (user) {
        console.log("User s this ")
        console.log(user);
        console.log(user.user_email);
        this.email = user.user_email;
        this.api.getUserByEmail(this.email).subscribe((res: any) => {
          this.userDetail = res;
          console.log(this.userDetail[0]);
          this.name = this.userDetail[0].display_name;
          this.address = this.userDetail[0].primary_address;

          // this.userDetail.forEach((x) => {
          //   this.updateBusinessForm.setValue({ name: x.business_name, year: x.establishment_year, type: x.business_type, description: x.description })
          // })
        })
      } else {
        console.log("empty user", user);
      }
    });
    console.log(parseInt(this.mrp))
    this.totalInt = (parseInt(this.mrp) - parseInt(this.discount) - parseInt(this.tax));
    console.log(this.totalInt.toString());

  }


}
