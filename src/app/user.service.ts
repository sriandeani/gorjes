import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http) { }

  login(email, password) {
    return this.http.post('http://localhost:3000/api/user/login', {
      email,
      password
    });
  }

  createAccount(nama, email, password) {
    return this.http.post('http://localhost:3000/api/user/create-account', {
      nama,
      email,
      password
    });
  }
}
