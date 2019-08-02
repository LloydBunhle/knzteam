import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  item = [];
  items = [];
  selectedItems = [];
  checked = false;
  total = 0;
 
  constructor(private cartService: CartService, public toastController: ToastController) { }
 
  ngOnInit() {

    let items = this.cartService.getCart();
 
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price + 130), 0);
   
  }

accept(){
  this.checked = true;
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Successfully checked-out.',
    duration: 2000,
  
  });
  toast.present();
}

}

