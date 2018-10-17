import { ProductRestService } from './../product-rest/product-rest.service';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

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
    private productRestService: ProductRestService,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log('id', id);

    this.productRestService.getById(id).subscribe(
      (data) => {
        this.currentProduct = data;
      },
      (error) => {
        console.error('error', error);
      }
    );
  }

  public backToOverview() {
    this.router.navigate(['/products']);
  }

}
