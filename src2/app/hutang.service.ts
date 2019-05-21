import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
const KEY_DATA_PINJAMAN = "dataPinjaman";
@Injectable({
 providedIn: 'root'
})
export class HutangService {
 listDataPinjaman: any = [];
 constructor(
 public storage: Storage,
 public toastController: ToastController
 ) { }
 async showMessage(textPesan) {
 const toast = await this.toastController.create({
 message: textPesan,
 duration: 2000
 });
 toast.present();
 }
 simpanData(tempData) {
 this.listDataPinjaman.push(tempData);
 this.storage.set(KEY_DATA_PINJAMAN,
 JSON.stringify(this.listDataPinjaman));
 }
 hapusData(item) {
  var temp = this.listDataPinjaman.indexOf(item);
  this.listDataPinjaman.splice(temp, 1);
  this.storage.set(KEY_DATA_PINJAMAN,
  JSON.stringify(this.listDataPinjaman));
  }

  hapusSemuaData() {
    this.storage.remove(KEY_DATA_PINJAMAN);
    this.listDataPinjaman = [];
    }
   

 ambilData() {
 this.storage.get(KEY_DATA_PINJAMAN).then((data) => {
 if (data != null) {
 this.listDataPinjaman = JSON.parse(data);
 console.log(this.listDataPinjaman);
 } else {
 this.listDataPinjaman = [];
 console.log('empty');
 }
 })
 }
}