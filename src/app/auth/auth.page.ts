import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private storage: Storage, private router: Router) { }

  async ngOnInit() {
    const auth = await this.storage.get('userData');
    if (auth) {
      return this.router.navigate(['home'], { replaceUrl: true });
    }
    return this.router.navigate(['welcome'], { replaceUrl: true });
  }

}
