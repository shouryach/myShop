import { Component, OnInit, Input } from '@angular/core';
import { TopbrandService } from 'src/app/all-Services/topbrand.service';

@Component({
  selector: 'app-fav-details',
  templateUrl: './fav-details.component.html',
  styleUrls: ['./fav-details.component.scss'],
})
export class FavDetailsComponent implements OnInit {

  constructor(private topBrandService:TopbrandService) { }

  private topBrandList = []
  private topBrandListFavDetails=[];
  private topBrandListFirstTwo=[];
  private topBrandListLastTwo=[];

  ngOnInit() {
   this.topBrandService.getTopBrand().subscribe((res : any[]) =>{
      console.log(res);
      this.topBrandList = res;

      this.topBrandListFavDetails = this.topBrandList.slice(0,4);
      console.log(this.topBrandListFavDetails);

      this.topBrandListFirstTwo = this.topBrandListFavDetails.slice(0,2);
      this.topBrandListLastTwo = this.topBrandListFavDetails.slice(2,4);
      console.log("FirstTwo")
      console.log(this.topBrandListFirstTwo);
      console.log("Odd")
      console.log(this.topBrandListLastTwo);
      this.topBrandListFirstTwo = this.topBrandListFavDetails.slice(0,2);
      this.topBrandListLastTwo = this.topBrandListFavDetails.slice(2,4);
      console.log("FirstTwo")
      console.log(this.topBrandListFirstTwo);
      console.log("Odd")
      console.log(this.topBrandListLastTwo);
    });
   }

}
