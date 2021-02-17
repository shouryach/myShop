import { Component, OnInit } from '@angular/core';
import { TopcategoryService } from 'src/app/all-Services/topcategory.service';

@Component({
  selector: 'app-formal-wear-details',
  templateUrl: './formal-wear-details.component.html',
  styleUrls: ['./formal-wear-details.component.scss'],
})
export class FormalWearDetailsComponent implements OnInit {

  private topCategoryList = [];
  private topCategoryFormalList = [];
  private topCategoryFormalListFirstTwo = [];
  private topCategoryFormalListLastTwo = [];

  constructor(private topCategoryService:TopcategoryService) { }

  ngOnInit() {
    this.topCategoryService.getTopCategory().subscribe((res : any[]) => {
      console.log(res);
      this.topCategoryList = res;
      this.topCategoryFormalList = this.topCategoryList.slice(0,4);

      this.topCategoryFormalListFirstTwo = this.topCategoryFormalList.slice(0,2);
      console.log(this.topCategoryFormalListFirstTwo)
      this.topCategoryFormalListLastTwo = this.topCategoryFormalList.slice(2,4);
      console.log(this.topCategoryFormalListLastTwo)
    });

 
  }

}
