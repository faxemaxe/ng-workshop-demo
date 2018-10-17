import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'Blackberry', price: 1.49},
    { id: 2, name: 'Orange', price: 1.19},
    { id: 3, name: 'Strawberry', price: 2.89},
    { id: 4, name: 'Apple', price: 0.19},
  ];

  constructor() { }

  public getAll() {
    return this.products;
  }

  public getById(id: number) {
    const item = this.products.find((currentProduct) => {
      return currentProduct.id === id;
    });

    console.log('item', item);

    if (item) {
      return item;
    } else {
      return null;
    }
  }

}
