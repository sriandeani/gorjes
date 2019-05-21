import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-beli',
  templateUrl: './beli.page.html',
  styleUrls: ['./beli.page.scss'],
})
export class BeliPage implements OnInit {
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
  nama: any;
  alamat: any;
  kuantitas: any;

  view = {
    id: '',
    productName: '',
    image: '',
    harga: ''
  }
  constructor(private params: ActivatedRoute, private storage: Storage, private location: Location) { }

  async ngOnInit() {
    const index = parseInt(this.params.snapshot.paramMap.get('id')) - 1;
    this.view = this.katalog[index];
    let beli = await this.storage.get('beli');
    console.log(JSON.parse(beli));
  }

  async beli() {
    let beli = await this.storage.get('beli');
    const data = {
      nama: this.nama,
      alamat: this.alamat,
      kuantitas: this.alamat,
      produk_id: this.params.snapshot.paramMap.get('id')
    }
    if (beli) {
      const newBeli = JSON.parse(beli);
      newBeli.beli.push(data);
      await this.storage.set('beli', JSON.stringify(newBeli));
      return this.location.back();
    }
    beli = {
      beli: [data]
    };
    await this.storage.set('beli', JSON.stringify(beli));
    return this.location.back();
  }

}
