import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://www.millionerbychoice.in';
  consumerKey = 'ck_7d6744753d18767484f19e073b89635aa3f9d38c';
  consumerSecret = 'cs_689fe033372ce560cc4aff1c9c45d8ed8955a8fc';
  constructor(private http:HttpClient) { }
  public getProductDetails(pid) {
    return this.http.get(`${this.url}/wp-json/wc/v3/products/${pid}?lang=en&currency=USD&consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`);
  }


  public getVariationsDetails(pid,vid) {
    return this.http.get(`${this.url}/wp-json/wc/v3/products/${pid}/variations/${vid}?lang=en&currency=USD&consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`);
  }

  public getShopDetails(pid) {
    return this.http.get(`${this.url}/wp-json/wc/v3/products/?category=${pid}&lang=en&currency=USD&consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`);
  }

  public getOrderDetails(){
    return this.http.get(`${this.url}/wp-json/wc/v3/orders/?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`);
  } 


}
