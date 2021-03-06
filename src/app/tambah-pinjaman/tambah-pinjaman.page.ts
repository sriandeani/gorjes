import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HutangService } from '../hutang.service';

@Component({
  selector: 'app-tambah-pinjaman',
  templateUrl: './tambah-pinjaman.page.html',
  styleUrls: ['./tambah-pinjaman.page.scss'],
})
export class TambahPinjamanPage implements OnInit {
  tipe: any = null;
  user: any = null;
  harga: any = null;
  tanggalPembelian: any = null;
  tanggalexpired: any = null;

  constructor(
    public hutang: HutangService,
    public router: Router) { }

  ngOnInit() {
  }

}
