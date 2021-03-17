import {Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPage } from 'src/app/all-pages/search/search.page';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from 'src/app/all-Services/product.service';
import { HttpClient } from '@angular/common/http';

import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-shop-details-content',
  templateUrl: './shop-details-content.component.html',
  styleUrls: ['./shop-details-content.component.scss'],
})
export class ShopDetailsContentComponent implements OnInit {

  @ViewChild('myDivElementRef') myDivElementRef: ElementRef;
  cartData:any;
  baseProducts:any;
  qty:any;
  product:any;
  galleryImages:any;
  color:any;
  size:any;
  selectedColor:any;
  selectedSize:any;
  id:any;
  productData:any;
  name:any;
  price_html:any;
  description:any;
  short_description:any;


  constructor(private toast: ToastController,private storage: Storage,private el: ElementRef,private http:HttpClient,public modalController: ModalController,private route: ActivatedRoute,private router:Router,private productService:ProductService) {
    this.qty = 1;
   }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('pid');
    this.productService.getProductDetails(this.id).subscribe(data=>{
      console.log(data);
      this.product = data;
      this.name = this.product.name;
      this.price_html = this.product.price_html;
      this.galleryImages = this.product.images;
      this.color = this.product.attributes[0].options;
      this.description = this.product.description;
      this.short_description = this.product.short_description;
      //this.size = this.product.attributes[1].options;
    })
  }

  async searchModel() {
    const modal = await this.modalController.create({
      component: SearchPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  

  setColor(color){
    console.log(color);
    this.selectedColor = color;
    this.http.get(`http://millionerbychoice.in/wp-json/myShop/v2/variationid/?color=${this.selectedColor}&id=${this.id}`).subscribe(res=>{
        console.log(res);
      })

      this.http.get(`http://millionerbychoice.in/wp-json/myShop/v2/variationimages/?color=${this.selectedColor}&id=${this.id}`).subscribe(res=>{
        this.galleryImages = res;
      })
  }

  // setSize(size){
    
  //   this.selectedSize = size;

  //   if(this.selectedSize !=""){
  //     this.http.get(`http://millionerbychoice.in/wp-json/myShop/v2/variationid/?color=${this.selectedColor}&size=${this.selectedSize}`).subscribe(res=>{
  //       console.log(res);
  //     })

  //     this.http.get(`http://millionerbychoice.in/wp-json/myShop/v2/variationimages/?color=${this.selectedColor}&size=${this.selectedSize}`).subscribe(res=>{
  //       this.galleryImages = res;
  //     })


  //   }

  // }


  // increment product qty
  incrementQty(i) {
    console.log(this.qty+1);
    this.qty+= 1;
  }
 
  // decrement product qty
  decrementQty(i) {
    if(this.qty-1 < 1 ){
      this.qty = 1;
    }else{
      this.qty -= 1;
    }
  }

  addToCart(i,item,inputbox){

    //this.storage.clear();

    let className = ".qty_num_tal"+i;
    let textEl = document.querySelector<HTMLInputElement>(className);

    console.log(textEl.value);

    
    let itemName = item;
    const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 

    this.http.get(`http://millionerbychoice.in/wp-json/myShop/v2/variationid/?color=${itemName}&id=${this.id}`).subscribe(res=>{
        let variationId = res;
        this.productData = [textEl.value, res,this.product.id];
      
        
        this.storage.get(`product_${this.product.id}_${res}`).then(async data => {

          if (data) {
            const toast = await this.toast.create({
              message: 'Item already in Cart',
              duration: 2000
            });
            toast.present();
          } else {
          
            const toast = await this.toast.create({
              message: 'Added to Cart',
              duration: 2000
            });
            toast.present();
            this.storage
              .set(`product_${this.product.id}_${res}`, JSON.stringify(this.productData))
              .then(() => {
                
              });
    
            }
          
        });
      })

      

    // console.log(btnElement.value);

    

    

    this.storage
      .forEach((value, key) => {
        const obj = {};
        //const parsedData = JSON.parse(value);
        console.log(value)
        // this.cartData.push(parsedData);
        // obj['product_id'] = parsedData.id;
        // obj['price'] = parseInt(parsedData.price, 10);
        // obj['quantity'] = 1;
        // this.baseProducts.push(obj);
      })
      .then(() => {
        
        //this.dataService.cart = this.baseProducts;
      });

   

  }

  

}
