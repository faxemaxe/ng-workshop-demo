import { ProductService } from './product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public products: any[] = [];

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.products = this.productService.getAll();
  }

}
