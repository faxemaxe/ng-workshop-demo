import { Product } from './../product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authentication': 'Holladiewaldfeeistdassicher.'
    });

    const params = new HttpParams()
                            .set('serach', 'blac');

    return this.httpClient.get(`${this.baseUrl}/products`, {
      headers: headers,
    });
  }

  public getById(id: string) {
    return this.httpClient.get(`${this.baseUrl}/products/${id}`);
  }
}
