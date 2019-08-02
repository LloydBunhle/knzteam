import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { NavController } from "@ionic/angular";

import { ViewmodalPage } from '../viewmodal/viewmodal.page';

import { PopoverComponent } from '.././popover/popover.component';
import { CartService } from '../cart.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page  implements OnInit {


 
  items = [];

   cart = [];

  public isSearchbarOpened = false;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };


  constructor( private router: Router,  public popoverController: PopoverController, private cartService: CartService ) { }

  async quantity(ev: any) {
    const popover = await this.popoverController.create({
        component: PopoverComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
  }

 
  
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();

  }


  addToCart(product) {
    this.cartService.addProduct(product);

    console.log(product)
  }
 
}
