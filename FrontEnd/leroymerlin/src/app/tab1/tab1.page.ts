import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { ViewmodalPage } from '../viewmodal/viewmodal.page';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page  implements OnInit {



  items = [];

  private data = [
    {
      category: 'BREAKING & DRILLING',
      products: [
        { id: 1, name: 'Auger', description: 'BT 121', price: '610' },
        { id: 2, name: 'Drill', description: 'SDS Max', price: '285' },
        { id: 3, name: 'Jack Hammer', description: 'Large T3000 (Hilti Excl. Chisel)', price: '690' },
      ]
    },
    {
      category: 'ELECTRIC TOOLS',
      products: [
        { id: 4, name: 'Floor Machine Scarifier', description: 'Small',  price: '780' },
        { id: 5, name: 'Wall Chaser', description: '(Excl. Blades)',  price: '310' }
      ]
    },
    {
      category: 'GENERATORS & WELDING',
      products: [
        { id: 6, name: 'Generator 6.5kVA ', description: 'AVR',  price: '370' },
        { id: 7, name: 'Generator', description: 'Petrol Welder',  price: '410' },
       
      ]
    },
    {

      category: 'LAWN & GARDEN',
      products: [
        { id: 8, name: 'Chain Saw', description: 'MS381',  price: '610' },
        { id: 9, name: 'Lawn Mower', description: 'Petro',  price: '310' },
      
      ]
    },
    // {
    //   category: 'PROMOTION',
      
    //   products: [
    //     { id: 10, name: 'Mag Base Drill', description: 'Standard', price: '350' },
    //     { id: 11, name: 'Auger Bit', description: '300mm', price: '120' },
    //     { id: 12, name: 'Planer', description: '(Incl. Blades)', price: '100' },
     
       
    //   ]
    // },
  ];

  private cart = [];

  public isSearchbarOpened = false;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };


  constructor(public modalController: ModalController, private router: Router) { }

  async presentModal() {

    const modal = await this.modalController.create({
      component: ViewmodalPage,
      componentProps: {  }

    });
  
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        // this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });
  
    return await modal.present();
  }
  check() {
    this.router.navigate(['/settime']);
  }

  private currentNumber = 0;


private increment () {
  this.currentNumber++;
}

private decrement () {
  this.currentNumber--;
}

  
  ngOnInit() {
    this.items = this.getProducts() 
  }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

}
