import { Component, OnInit } from '@angular/core';
import { HutangService } from '../hutang.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  listDataPinjaman: any = [];
  constructor(
  public router: Router,
  public hutang: HutangService
  ) {
  setTimeout(() => {
  this.listDataPinjaman = this.hutang.listDataPinjaman;
  }, 1000);
  }
  goTambahPinjaman() {
  this.router.navigate(['/tambah-pinjaman']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
 
  hapusDataPinjaman(item) {
   this.hutang.hapusData(item);
   }
 
   hapusSemuaDataPinjaman() {
     this.hutang.hapusSemuaData();
     this.listDataPinjaman = [];
     }
    
 } 