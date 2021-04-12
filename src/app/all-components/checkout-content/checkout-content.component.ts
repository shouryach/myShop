import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ProductService } from 'src/app/all-Services/product.service';
@Component({
  selector: 'app-checkout-content',
  templateUrl: './checkout-content.component.html',
  styleUrls: ['./checkout-content.component.scss'],
})
export class CheckoutContentComponent implements OnInit {

  avail: boolean = false;
  more: boolean = true;
  less: boolean = false;
  active: boolean = false;

  price=0;
  orderTotal=0;
  total=0;
  items=[];
  count=1;
  billingDetails:any;

  addbilling:any;

  variationsdetils:any;

  constructor(private storage: Storage,private productService:ProductService) { }

  expand(){
    this.avail=!this.avail;
    this.more=!this.more;
    this.less=!this.less;
    this.active=!this.active;
  }

  ngOnInit() {

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
