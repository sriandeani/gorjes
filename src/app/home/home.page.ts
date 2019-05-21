import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HutangService } from '../hutang.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listDataPinjaman: any = [];
  constructor(
    public router: Router,
    public hutang: HutangService
  ) {
    setTimeout(() => {
      // this.listDataPinjaman = this.hutang.listDataPinjaman;
    }, 1000);
  }
  goTambahPinjaman() {
    this.router.navigate(['/tambah-pinjaman']);
  }

  hapusDataPinjaman(item) {
    // this.hutang.hapusData(item);
  }

  goCart() {
    this.router.navigate(['/cart']);
  }

  hapusSemuaDataPinjaman() {
    // this.hutang.hapusSemuaData();
    this.listDataPinjaman = [];
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}



