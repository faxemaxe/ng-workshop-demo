import { Product, IProduct } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ProductRestService } from '../product-rest/product-rest.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  public products: Product[] = [];
  public searchValue: string = '';

  constructor(
    private productService: ProductService,
    private productRestService: ProductRestService,
  ) { }

  ngOnInit() {
    // this.products = this.productService.getAll();
    this.productRestService.getAll().subscribe(
      (data: Product[]) => {
        console.log('data', data);
        this.products = data;
      },
      (error) => {
        console.error('error', error);
      },
    );
  }

  getFilteredProducts() {
    return this.products.filter((product) => {
      const lowerSearch = this.searchValue.toLowerCase();
      const lowerName = product.name.toLowerCase();
      return lowerName.indexOf(lowerSearch) >= 0;
    });
  }

  /*
    BLACKBERRY

    bla
  */

}
