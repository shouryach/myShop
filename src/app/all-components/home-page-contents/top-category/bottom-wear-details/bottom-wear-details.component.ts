import { Component, OnInit } from '@angular/core';
import { TopcategoryService } from 'src/app/all-Services/topcategory.service';

@Component({
  selector: 'app-bottom-wear-details',
  templateUrl: './bottom-wear-details.component.html',
  styleUrls: ['./bottom-wear-details.component.scss'],
})
export class BottomWearDetailsComponent implements OnInit {

  private topCategoryList = [];
  private topCategoryBottomList = [];
  private topCategoryBottomListFirstTwo = [];
  private topCategoryBottomListLastTwo = [];

  constructor(private topCategoryService:TopcategoryService) { }

  ngOnInit() {
    this.topCategoryService.getTopCategory().subscribe((res : any[]) => {
      console.log(res);
      this.topCategoryList = res;
      this.topCategoryBottomList = this.topCategoryList.slice(4,8);
      console.log(this.topCategoryBottomList)

      this.topCategoryBottomListFirstTwo = this.topCategoryBottomList.slice(0,2);
      console.log(this.topCategoryBottomListFirstTwo)
      this.topCategoryBottomListLastTwo = this.topCategoryBottomList.slice(2,4);
      console.log(this.topCategoryBottomListLastTwo)
    });
  }

}
