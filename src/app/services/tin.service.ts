// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { delay } from 'rxjs/operators';
// import { Observable } from 'rxjs/internal/Observable';
// import { ApiResult, Product } from './interfaces';

// const BASE_URL = 'https://fakestoreapi.com/';

// @Injectable({
//   providedIn: 'root'
// })
// export class TinService {

//   private http = inject(HttpClient);

//   constructor() { }

//   getAllProducts(limit = 8): Observable<ApiResult> {
//     return this.http
//       .get<ApiResult>(`${BASE_URL}products?limit=${limit}`)
//       .pipe(
//         delay(2000)
//       );
//   }
//     getAllProducts(limit = 8): Observable<ApiResult> {
//     return this.http
//       .get<ApiResult>(`${BASE_URL}products?limit=${limit}`);
//   }

//   allListings(limit = 9): Observable<ApiResult> {
//     return this.http.get<ApiResult>(`${BASE_URL}products?limit=${limit}`);
//   }

//   allProducts$ = this.http.get<ApiResult>(`${BASE_URL}products?limit=8`);

//   getProductDetails(id: string): Observable<Product> {
//     return this.http.get<Product>(`${BASE_URL}products/${id}`);
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Product } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class TinService {
  #http = inject(HttpClient);

  constructor() { }

  getAll(query = ''): Observable<any> {
    return this.#http.get(
      'https://dummyjson.com/product',
    )
  }
  getAllByCategory(query = ''): Observable<any> {
    return this.#http.get(
      `https://dummyjson.com/products/category/${query}`
    );
  }
}
