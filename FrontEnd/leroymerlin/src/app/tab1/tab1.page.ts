import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {

  categoryChanged(ev: any) {
    console.log('category changed', ev);
  }

//  @ViewChild('slider') slider: IonSlides;
//  page = "0";
//  @ViewChild(IonSlides) slides: IonSlides;

  items = [];

  private data = [
    {
      category: 'PROMOTION',
      expanded: true,
      products: [
        { id: 0, name: 'Mag Base Drill', description: 'Standard', price: '350' },
        { id: 1, name: 'Auger Bit', description: '300mm', price: '120' },
     
       
      ]
    },
    {
      category: 'BREAKING & DRILLING',
      products: [
        { id: 0, name: 'Auger', description: 'BT 121', price: '610' },
        { id: 1, name: 'Drill', description: 'SDS Max', price: '285' },
        { id: 2, name: 'Jack Hammer', description: 'Large T3000 (Hilti Excl. Chisel)', price: '690' },
      ]
    },
    {
      category: 'ELECTRIC TOOLS',
      products: [
        { id: 3, name: 'Floor Machine Scarifier', description: 'Small',  price: '780' },
        { id: 4, name: 'Wall Chaser', description: '(Excl. Blades)',  price: '310' }
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
        { id: 6, name: 'Chain Saw', description: 'MS381',  price: '610' },
        { id: 7, name: 'Lawn Mower', description: 'Petro',  price: '310' },
      
      ]
    }
  ];

  public isSearchbarOpened = false;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor() {}

  // selectedTab(index) {
  //   this.slider.slideTo(index);
  // }

  ngOnInit() {
    this.getProducts() 
  }

  getProducts() {
    return this.data;
  }

}
