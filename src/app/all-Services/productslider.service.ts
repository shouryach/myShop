import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsliderService {

  constructor(private http:HttpClient) { }

  public getNewOnShop() : Observable<object> {
    return this.http.get('https://www.millionerbychoice.in/wp-json/myShop/v2/newonshop')
  }
}
