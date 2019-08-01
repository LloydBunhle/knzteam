import { Component } from '@angular/core';
import { ProductModel } from '../Product';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: ProductModel[];
  objectKeys;

  constructor(public apidataService : ApidataService) {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.apidataService.getAllProducts().subscribe(data=>{
      this.products = data;
      
      console.log(data)
    });
  };
}
