import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Topcategory2Service {

  constructor(private http:HttpClient) { }

  public getTopCategory2() : Observable<Object>{
    return this.http.get('https://www.millionerbychoice.in/wp-json/myShop/v2/topcategory2');
  }
}
