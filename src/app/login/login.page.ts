import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Storage } from '@ionic/storage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;

  constructor(
    public router: Router,
    public storage: Storage,
    public service: UserService
  ) { }
  ngOnInit() {
  }
  gorjes() {
    this.router.navigate(['/home']);
  }

  signup() {
    this.router.navigate(['/create-account']);
  }

  login() {
    this.service.login(this.username, this.password).subscribe(async response => {
      const res = await response.json();
      if (res) {
        await this.storage.set('userData', res);
        return this.router.navigate(['auth'], { replaceUrl: true })
      }
    });
  }
}
