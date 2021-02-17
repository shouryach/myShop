import { Component, OnInit } from '@angular/core';
import { Topcategory2Service } from 'src/app/all-Services/topcategory2.service';

@Component({
  selector: 'app-category-brand-product',
  templateUrl: './category-brand-product.component.html',
  styleUrls: ['./category-brand-product.component.scss'],
})
export class CategoryBrandProductComponent implements OnInit {

  private topCategory2List =[]
  constructor(private topCategory2Service:Topcategory2Service) { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 2,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 7,
  };

  ngOnInit() {
    this.topCategory2Service.getTopCategory2().subscribe((res:any[]) =>{
      console.log(res);
      this.topCategory2List = res;
    })
  }

}
