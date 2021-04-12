import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ProductService } from 'src/app/all-Services/product.service';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/all-Services/api.service';
@Component({
  selector: 'app-select-user-address-content',
  templateUrl: './select-user-address-content.component.html',
  styleUrls: ['./select-user-address-content.component.scss'],
})
export class SelectUserAddressContentComponent implements OnInit {
  //apiService: any;

  billing1_first_name:any;
  billing1_last_name:any;
  billing1_address_1:any;
  billing1_postcode:any;
  billing1_state:any;
  billing1_phone:any;

  billing2_first_name:any;
  billing2_last_name:any;
  billing2_address_1:any;
  billing2_postcode:any;
  billing2_state:any;
  billing2_phone:any;

  price=0;
  orderTotal=0;
  total=0;
  items=[];
  count=1;
  billingDetails:any;
  addbilling:any;

  variationsdetils:any;
  
  constructor(private toast: ToastController,private storage: Storage,private productService:ProductService,private apiService:ApiService) { }

  ngOnInit() {
    this.storage.get('myjwtstoragekey').then(data => {
      this.storage.set(`count`,this.count);
      if (data) {
        
        this.apiService.getUserBillingEmail(data.user_email).subscribe(data=>{
          console.log(data);
          this.billingDetails = data;
        })
      }
    })

    this.storage.get(`useraddress_1`).then(async data => {
      if (data) {

        this.billing1_first_name = data.billing_first_name;
        this.billing1_last_name = data.billing_last_name;
        this.billing1_address_1 = data.billing_address_1;
        this.billing1_postcode = data.billing_postcode;
        this.billing1_state = data.billing_state;
        this.billing1_phone = data.billing_phone;
       
        
      }
      else {
       
      }

      
      
    }) 

    this.storage.get(`useraddress_2`).then(async data => {
      if (data) {

        this.billing2_first_name = data.billing_first_name;
        this.billing2_last_name = data.billing_last_name;
        this.billing2_address_1 = data.billing_address_1;
        this.billing2_postcode = data.billing_postcode;
        this.billing2_state = data.billing_state;
        this.billing2_phone = data.billing_phone;
       
        
      }
      else {
       
      }

      
      
    }) 

    return new Promise(resolve=>{
      this.storage.forEach((v,k)=>{
        //console.log('value',v);
        
        const substring = "useraddress_";
        if(k.indexOf(substring) !== -1){
          console.log('key',k);
          
          //console.log('value',pid);
          this.count = this.count+1;
          console.log(this.count)
          if(this.count ==3){
            this.addbilling =false;
          }
          this.storage.set(`count`,this.count);
        }
        
      }).then(()=>{
        
        })

        this.storage.forEach((v,k)=>{
          //console.log('value',v);
          
          const substring = "product_";
          if(k.indexOf(substring) !== -1){
            console.log('key',k);
           var nameArr = v.split(',');
    
           let pid = nameArr[2].replace(']', '');
    
           let vid = nameArr[1];
    
           var innerObj = {};
    
           this.productService.getProductDetails(pid).subscribe(data=>{
            //console.log(data);
            
            innerObj['product'] = data;
            innerObj['variation'] = nameArr[1];
            innerObj['qty'] = 1;
            this.productService.getVariationsDetails(pid,vid).subscribe(data=>{
              //console.log(data);
            
              this.variationsdetils = data;
              innerObj['color'] = this.variationsdetils.attributes[0].option;
              this.price =  Number(this.price)+ Number(this.variationsdetils.price);
              this.orderTotal = this.price;
              this.total = this.price;
              //items.push("product":data,);
              //this.size = this.product.attributes[1].options;
            })
            
            this.items.push(innerObj)
      
            //items.push("product":data,);
            //this.size = this.product.attributes[1].options;
          })
    
          
    
          
    
            //console.log('value',pid);
          }
          
        }).then(()=>{
          resolve(this.items);
          console.log(this.items);
          })
        }) 


      

  }

}
