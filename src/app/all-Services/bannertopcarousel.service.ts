import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannertopcarouselService {

  constructor(private http:HttpClient) { }

  public getBannerTopCarousel() {
    return this.http.get("https://www.millionerbychoice.in/wp-json/myShop/v2/topbanner");
  }
}
