import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TambahPinjamanPage } from './tambah-pinjaman.page';

const routes: Routes = [
  {
    path: '',
    component: TambahPinjamanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TambahPinjamanPage]
})
export class TambahPinjamanPageModule {}
