import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public isEdit: boolean = true;

  constructor(
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.activedRoute.snapshot.params['id'];

    this.isEdit = !!id;

    console.log('id', id);
  }

}
