import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  
  constructor(private popoverController: PopoverController, private cartService: CartService) { }

  items = [];
  cart = [];

  ngOnInit() {

    this.items = this.cartService.getComplimentary();
    this.cart = this.cartService.getCart();
   
  }


  async DismissClick() {
    await this.popoverController.dismiss();
      }

  // compareWith = compareWithFn;
    
}


