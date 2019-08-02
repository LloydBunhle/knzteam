import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  cart = [];

  constructor(private cartService: CartService) {
   
     
      this.cart = this.cartService.getCart();
  
    
  }

  addToCart(product) {
    this.cartService.addProduct(product);

    console.log(product)
  }

}
