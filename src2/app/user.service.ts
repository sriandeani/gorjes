import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http, public toasController: ToastController) { }
  loadUser() {
    return this.http.get('http://localhost:8081/api/user/');
  }
  signup(data) {
    return this.http.post('http://localhost:8081/api/user/', data);
  }
  updateUser(data) {
    return this.http.post('http://localhost:8081/api/user/'+ data.userid, data);
  }
  deleteUser(data) {
    return this.http.delete('http://localhost:8081/api/user/' + data.userId);
  }
  async message(msg) {
    const toast = await this.toasController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
