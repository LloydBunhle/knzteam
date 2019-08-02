import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private product = [
    {
      
      id: 10,
      cname: 'Oval nail',
      pr: 'R50',
    },
    {
      id: 11,
      cname: 'brass nail',
      pr: 'R100',
    },
    {
      id: 12,
      cname: 'panel pins',
      pr: 'R80',
    }
  
  ];


  private data = [
    {
      category: 'BREAKING & DRILLING',
      products: [
        { id: 1, name: 'Auger', description: 'BT 121', price: '610' },
        { id: 2, name: 'Drill', description: 'SDS Max', price: '285' },
        { id: 3, name: 'Jack Hammer', description: 'Large T3000 (Hilti Excl. Chisel)', price: '690' },
      ]
    },
    {
      category: 'ELECTRIC TOOLS',
      products: [
        { id: 4, name: 'Floor Machine Scarifier', description: 'Small',  price: '780' },
        { id: 5, name: 'Wall Chaser', description: '(Excl. Blades)',  price: '310' }
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
        { id: 8, name: 'Chain Saw', description: 'MS381',  price: '610' },
        { id: 9, name: 'Lawn Mower', description: 'Petro',  price: '310' },
      
      ]
    },
    
  ];
 
  private cart = [];

 
getComplimentary(){
  return this.product;
}
 
  getProducts() {
    return this.data; 
  }
 
  getCart() {
    
    return this.cart;
    
  }


  addProduct(product) {
    this.cart.push(product);
  }

  addComplimentary(complimentary) {
    this.cart.push(complimentary);
  }


  constructor() {


   }
}