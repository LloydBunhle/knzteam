import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-viewmodal',
  templateUrl: './viewmodal.page.html',
  styleUrls: ['./viewmodal.page.scss'],
})
export class ViewmodalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  private currentNumber = 0;


private increment () {
  this.currentNumber++;
  console.log("increment")
}

private decrement () {
  this.currentNumber--;
}

  ngOnInit() {
  }

  async closeModal(){

    await this.modalController.dismiss();
  }

}
