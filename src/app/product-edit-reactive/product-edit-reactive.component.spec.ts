import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditReactiveComponent } from './product-edit-reactive.component';

describe('ProductEditReactiveComponent', () => {
  let component: ProductEditReactiveComponent;
  let fixture: ComponentFixture<ProductEditReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
