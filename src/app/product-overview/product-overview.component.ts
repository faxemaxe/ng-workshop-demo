import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  public products: any[] = [];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

}
