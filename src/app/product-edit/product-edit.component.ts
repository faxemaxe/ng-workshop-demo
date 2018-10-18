import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public isEdit: boolean = true;

  public product = new Product();

  public currentProduct = {
    name: null,
    price: null,
    stock: {
      amount: null,
      unit: null
    }
  };

  constructor(
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.activedRoute.snapshot.params['id'];

    this.isEdit = !!id;

    console.log('id', id);
  }

  public submitForm(value) {
    console.log('value', value);
  }

}
