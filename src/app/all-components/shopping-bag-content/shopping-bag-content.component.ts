import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ProductService } from 'src/app/all-Services/product.service';
import { ToastController } from '@ionic/angular';
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
  activelike: boolean = false;
  items=[];
  wishIcon= [];

  price=0;
  orderTotal=0;
  total=0;
  constructor(private toast: ToastController,private storage: Storage,private productService:ProductService) { }


  getAllFavorites(){
    //let items=[];
    return new Promise(resolve=>{
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

  activeWish(productid,variationid,index){
    let pid = productid;
    let vid = variationid;
    let i = index;
    //delete this.items[i];

    this.activelike = !this.activelike;
    console.log(this.activelike);

    
    this.storage.get(`wishlist_${pid}_${vid}`).then(async data => {
      if (data) {
        this.storage.remove(`wishlist_${pid}_${vid}`);
        const toast = await this.toast.create({
          message: 'Item Already In Wishlist',
          duration: 2000
        });
        toast.present();
        this.wishIcon[pid] = false;
        //console.log(`product_${pid}_${variationid}`);
        this.storage.remove(`product_${pid}_${vid}`);
        this.price = 0;
        this.items = [];
        this.getAllFavorites();
      }
      else {
        this.storage.remove(`product_${pid}_${vid}`);  
        const toast = await this.toast.create({
          message: 'Item Added in Wishlist',
          duration: 2000
        });
        toast.present();
        this.storage.set(`wishlist_${pid}_${vid}`,pid);
        this.wishIcon[pid] = true;
        this.price = 0;
        this.items = [];
        this.getAllFavorites();
      }

      
      
    }) 
    
  }

  remove(productid,variationid,index){
    let pid = productid;
    let vid = variationid;
    let i = index;
    //delete this.items[i];
    this.storage.remove(`product_${pid}_${vid}`);
    this.price = 0;    
    this.items = [];
    this.getAllFavorites();
  }

  ngOnInit() {
    this.getAllFavorites();
  }

}
