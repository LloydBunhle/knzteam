import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  private currentNumber = 0;


private increment () {
  this.currentNumber++;
  console.log("increment")
}

private decrement () {
  this.currentNumber--;
}

  ngOnInit() {}

  async DismissClick() {
    await this.popoverController.dismiss();
      }

}
