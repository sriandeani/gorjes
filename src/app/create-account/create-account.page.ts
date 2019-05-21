import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  data = {
    nama: '',
    email: '',
    password: ''
  }

  constructor(
    public router: Router,
    public storage: Storage,
    public service: UserService
  ) { }

  createAccount() {
    this.service.createAccount(this.data.nama, this.data.email, this.data.password).subscribe(async response => {
      const res = await response.json();
      if (res) {
        this.login();
      }
    });
  }

  login() {
    this.service.login(this.data.email, this.data.password).subscribe(async response => {
      const res = await response.json();
      if (res) {
        this.storage.set('userData', res);
        return this.router.navigate(['auth'], { replaceUrl: true })
      }
    });
  }

  ngOnInit() {
  }

  signup() {
    this.router.navigate(['/login']);
  }
}
