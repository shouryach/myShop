import { Component, OnInit } from '@angular/core';
import { TopbrandService } from 'src/app/all-Services/topbrand.service';

@Component({
  selector: 'app-top-brands',
  templateUrl: './top-brands.component.html',
  styleUrls: ['./top-brands.component.scss'],
})
export class TopBrandsComponent implements OnInit {

  constructor(private topBrandService:TopbrandService) { }

  ngOnInit() {}
  

}
