import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopcategoryService {

  constructor(private http:HttpClient){}  

  public getTopCategory() : Observable<Object>{
    return this.http.get('https://www.millionerbychoice.in/wp-json/myShop/v2/topcategory');
  }
}
