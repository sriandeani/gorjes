import { Component, OnInit } from '@angular/core';
import { HutangService } from '../hutang.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  data: any;
  constructor(
    public router: Router,
    public hutang: HutangService,
    private storage: Storage
  ) {
  }

  ngOnInit() {
    this.getCart();
  }

  async getCart() {
    const data = await this.storage.get('cart');
    if (data) {
      this.data = JSON.parse(data).bookmark;
      console.log(this.data);
    }
  }

  beli(id) {
    this.router.navigate([`beli/${id}`]);
  }

  goTambahPinjaman() {
    this.router.navigate(['/tambah-pinjaman']);
  }

  goHome() {
    this.router.navigate(['/list']);
  }

  async hapusSemuaDataPinjaman() {
    await this.storage.remove('cart');
    const data = await this.storage.get('cart');
    this.data = data;
  }

} 