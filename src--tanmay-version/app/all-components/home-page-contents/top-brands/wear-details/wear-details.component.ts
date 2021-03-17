import { Component, OnInit } from '@angular/core';
import { TopbrandService } from 'src/app/all-Services/topbrand.service';

@Component({
  selector: 'app-wear-details',
  templateUrl: './wear-details.component.html',
  styleUrls: ['./wear-details.component.scss'],
})
export class WearDetailsComponent implements OnInit {

  constructor(private topBrandService:TopbrandService) { }

  private topBrandList = []
  private topBrandListWearDetails=[];
  private topBrandListFirstTwo=[];
  private topBrandListLastTwo=[];

  ngOnInit() {
   this.topBrandService.getTopBrand().subscribe((res : any[]) =>{
      console.log(res);
      this.topBrandList = res;

      this.topBrandListWearDetails = this.topBrandList.slice(4, this.topBrandList.length);
      console.log(this.topBrandListWearDetails);

      this.topBrandListFirstTwo = this.topBrandListWearDetails.slice(0,2);
      this.topBrandListLastTwo = this.topBrandListWearDetails.slice(2,this.topBrandListWearDetails.length);
      console.log("Even")
      console.log(this.topBrandListFirstTwo);
      console.log("Odd")
      console.log(this.topBrandListLastTwo);
    });
   }

}
