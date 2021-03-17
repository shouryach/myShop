import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashscreenService {

  constructor(private http:HttpClient) { }

  public getFlashScreen():Observable<object>{
    return this.http.get('https://www.millionerbychoice.in/wp-json/myShop/v2/flashscreen');
  }

 

}
