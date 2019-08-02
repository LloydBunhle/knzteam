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

  async DismissClick() {
    await this.popoverController.dismiss();
      }

private increment () {
  this.currentNumber++;
  console.log("increment")
}

private decrement () {
  this.currentNumber--;
}

  ngOnInit() {}

  items: any[] = [
    {
      id: 1,
      name: 'hammer',
      price: 'R12',
    },
    {
      id: 2,
      name: 'cement',
      price: 'R90',
    },
    {
      id: 3,
      name: 'nails',
      price: 'R20',
    }
  ];

   compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  // compareWith = compareWithFn;
    
}




 



