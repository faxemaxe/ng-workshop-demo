import { Product } from './../product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRestService {

  private baseUrl: string = 'https://ng-workshop-demo.herokuapp.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll() {
    return this.httpClient.get(`${this.baseUrl}/products`);
  }

  public getById(id: string) {
    return this.httpClient.get(`${this.baseUrl}/products/${id}`);
  }
}
