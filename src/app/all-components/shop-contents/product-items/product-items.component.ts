import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/all-Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
})
export class ProductItemsComponent implements OnInit {

  activelike: boolean = false;
  id:any;
  product:any;
  galleryImages:any;
  color:any;
  size:any;
  selectedColor:any;
  selectedSize:any;
  wishIcon= [];
  productData:any;
  name:any;
  price_html:any;
  description:any;
  short_description:any;
  constructor(private toast: ToastController,private storage: Storage,private http:HttpClient,private route: ActivatedRoute,private router:Router,private productService:ProductService) { }

  active(productid){
    let pid = productid;
    this.activelike = !this.activelike;
    console.log(this.activelike);

    
    this.storage.get(`wishlist_${pid}`).then(async data => {
      if (data) {
        this.storage.remove(`wishlist_${pid}`);
        const toast = await this.toast.create({
          message: 'Item Removed From Wishlist',
          duration: 2000
        });
        toast.present();
        this.wishIcon[pid] = false;
      }
      else {
          
        const toast = await this.toast.create({
          message: 'Item Added in Wishlist',
          duration: 2000
        });
        toast.present();
        this.storage.set(`wishlist_${pid}`,pid);
        this.wishIcon[pid] = true;
      }
    }) 
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('pid');
    this.productService.getShopDetails(this.id).subscribe(data=>{
        console.log(data)
        this.product = data;
        for(var key in this.product){
          let pid = (this.product[key].id);
          this.storage.get(`wishlist_${pid}`).then(async data => {
            if (data) {
              this.wishIcon[pid] = true;
            }
            else {
              this.wishIcon[pid] = false;
              
            }
          }) 
        }
    }) 
  }

}
