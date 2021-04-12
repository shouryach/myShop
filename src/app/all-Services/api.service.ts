import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import { map, switchMap, tap } from 'rxjs/operators';

const JWT_KEY = 'myjwtstoragekey';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private user = new BehaviorSubject(null);
  
  constructor(private http: HttpClient, private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.storage.get(JWT_KEY).then(data => {
        if (data) {
          //console.log(data);
          this.user.next(data);
        }
      })
    })
  }
  
  signIn(username, password) {
    return this.http.post(`${environment.apiUrl}/jwt-auth/v1/token`, { username, password }).pipe(
      switchMap(data => {
        return from(this.storage.set(JWT_KEY, data));
      }),
      tap(data => {
        this.user.next(data);
      })
    );
  }

  signUp(username, email, password) {
    return this.http.post(`${environment.apiUrl}/wp/v2/users/register`, { username, email, password });
  }

  resetPassword(usernameOrEmail) {
    return this.http.post(`${environment.apiUrl}/wp/v2/users/lostpassword`, { user_login: usernameOrEmail });
  }

  getCurrentUser() {
    return this.user.asObservable();
  }
 
  getUserValue() {
    return this.user.getValue();
  }
 
  logout() {
    this.storage.remove(JWT_KEY).then(() => {
      this.user.next(null);
    });
  }

  getUserByEmail(email) {
    return this.http.get<any>("https://www.millionerbychoice.in/wp-json/myShop/v2/userdetails?email="+email);
    //return this.http.get<any>(" https://jsonplaceholder.typicode.com/todos/1");
  }

  getUserBillingEmail(email) {
    return this.http.get<any>("https://www.millionerbychoice.in/wp-json/myShop/v2/userbilling?email="+email);
    //return this.http.get<any>(" https://jsonplaceholder.typicode.com/todos/1");
  }

  saveData(name, email, mobile, company, pin){

    return this.http.get("https://www.millionerbychoice.in/wp-json/myShop/v2/saveUserdetails?name="+name+"&email="+email+"&mobile="+mobile+"&company="+company+"&pin="+pin).subscribe((res) =>
    console.log(res));
  }

  saveBusinessData(name, email, year, type, description){

    return this.http.get("https://www.millionerbychoice.in/wp-json/myShop/v2/saveBusinessdetails?name="+name+"&email="+email+"&year="+year+"&type="+type+"&description="+description).subscribe((res) =>
    console.log(res));
  }
}
