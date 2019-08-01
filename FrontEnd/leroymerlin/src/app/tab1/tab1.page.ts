import { Component } from '@angular/core';
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
export class Tab1Page  {
  
  // async presentActionSheet() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'More Options',
  //     buttons: [{
  //       text: 'Time',
  //       icon: 'clock',
  //       handler: () => {
  //         this.navCtrl.navigateForward('/settime');

         
  //       }
  //     }, {
  //       text: 'Quantity',
  //       icon: 'add-circle',
  //       handler: () => {
  //         // this.contacts();
  //       }
  //     }
  //       ,  {
  //       text: 'Close',
  //       icon: 'close',
  //       handler: () => {
  //         // this.actionSheetController.dismiss();
  //       }
  //     }]
  //   });
  //   await actionSheet.present();
  // }

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

}
