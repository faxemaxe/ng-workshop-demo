import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public currentProduct = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log('id', id);

    this.currentProduct = this.productService.getById( parseInt(id, 10) );
    console.log('this.currentProduct', this.currentProduct);
  }

  public backToOverview() {
    this.router.navigate(['/products']);
  }

}
