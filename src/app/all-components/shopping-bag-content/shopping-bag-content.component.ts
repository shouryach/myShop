import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ProductService } from 'src/app/all-Services/product.service';
@Component({
  selector: 'app-shopping-bag-content',
  templateUrl: './shopping-bag-content.component.html',
  styleUrls: ['./shopping-bag-content.component.scss'],
})
export class ShoppingBagContentComponent implements OnInit {

  avail: boolean = false;
  more: boolean = true;
  less: boolean = false;
  active: boolean = false;
  items=[];

  price=0;
  orderTotal=0;
  total=0;
  constructor(private storage: Storage,private productService:ProductService) { }


  getAllFavorites(){
    //let items=[];
    return new Promise(resolve=>{
    this.storage.forEach((v,k)=>{
      //console.log('value',v);
      
      const substring = "product_";
      if(k.indexOf(substring) !== -1){
       // console.log('key',k);
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
        
          let vdata = data;
          innerObj['color'] = vdata.attributes[0].option;
          this.price =  Number(this.price)+ Number(vdata.price);
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

  expand(){
    this.avail=!this.avail;
    this.more=!this.more;
    this.less=!this.less;
    this.active=!this.active;
  }
  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 2,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 15
  };

  ngOnInit() {
    this.getAllFavorites();
  }

}
