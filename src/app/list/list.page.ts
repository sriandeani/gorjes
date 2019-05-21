import { Component, OnInit } from '@angular/core';
import { HutangService } from '../hutang.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  katalog = [
    {
      id: '1',
      productName: 'Alexa Shawl',
      image: 'katalog1.jpg',
      harga: '70000'
    },
    {
      id: '2',
      productName: 'Allura Shawl',
      image: 'katalog2.jpg',
      harga: '70000'
    },
    {
      id: '3',
      productName: 'Azzura Shawl',
      image: 'katalog3.jpg',
      harga: '65000'
    },
    {
      id: '4',
      productName: 'Alynda Shawl',
      image: 'katalog4.jpg',
      harga: '75000'
    },
    {
      id: '5',
      productName: 'Alicia Shawl',
      image: 'katalog5.jpg',
      harga: '65000'
    },
    {
      id: '6',
      productName: 'Tyrex Shawl',
      image: 'tyrex.jpg',
      harga: '65000'
    },
    {
      id: '7',
      productName: 'Rachel Shawl',
      image: 'rachel.jpeg',
      harga: '75000'
    },
    {
      id: '8',
      productName: 'Tyrex Shawl Pashmina',
      image: 'pashmina.jpg',
      harga: '65000'
    },
    {
      id: '9',
      productName: 'Alexa Scarf',
      image: 'scarf1.jpg',
      harga: '65000'
    },
  ]
  constructor(
    public router: Router,
    public storage: Storage
  ) {
  }

  async ngOnInit() {
    let cart = await this.storage.get('cart');
    
  }
  goCart() {
    this.router.navigate(['/cart']);
  }

  async addtoCart(data) {
    let cart = await this.storage.get('cart');
    if (cart) {
      const newCart = JSON.parse(cart);
      newCart.bookmark.push(data);
      return await this.storage.set('cart', JSON.stringify(newCart));
    }
    cart = {
      bookmark: [data]
    };
    return await this.storage.set('cart', JSON.stringify(cart));
  }
}
