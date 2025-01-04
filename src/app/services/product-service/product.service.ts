import { Injectable } from '@angular/core';
import CatalogProduct from '../../model/CatalogProduct';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { products } from '../../mock-product-list';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'http://localhost:8080/api/products';
  private productList = products;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<CatalogProduct[]> {

    return of(this.productList);
  }
}
