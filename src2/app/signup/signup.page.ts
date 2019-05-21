import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 
  constructor(public router: Router,
    public modalController: ModalController) { }

  ngOnInit() {
    
  }

  
signup()
{
  this.router.navigate(['/login']);
}
}