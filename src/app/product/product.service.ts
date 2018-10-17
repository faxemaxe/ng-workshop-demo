import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { name: 'Blackberry', price: 1.49},
    { name: 'Orange', price: 1.19},
    { name: 'Strawberry', price: 2.89},
    { name: 'Apple', price: 0.19},
  ];

  constructor() { }

  public getAll() {
    return this.products;
  }

}
