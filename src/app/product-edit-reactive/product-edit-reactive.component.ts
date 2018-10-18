import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit-reactive',
  templateUrl: './product-edit-reactive.component.html',
  styleUrls: ['./product-edit-reactive.component.css']
})
export class ProductEditReactiveComponent implements OnInit {

  public editProductForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern('[A-Z][a-z]*')
    ]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    stock: new FormGroup({
      amount: new FormControl(),
      unit: new FormControl(),
    }),
    categories: new FormArray([
      new FormControl('Allgemein'),
      new FormControl(),
      new FormControl(),
    ])
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.editProductForm = this.fb.group({
      name: [null, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern('[A-Z][a-z]*')
        ]
      ],
      price: [null, [Validators.required, Validators.min(0)] ],
      stock: this.fb.group({
        amount: null,
        unit: null,
      }),
      categories: this.fb.array([
        this.fb.control('Allgemein'),
        this.fb.control(null),
        this.fb.control(null),
      ])
    });

  }

}
