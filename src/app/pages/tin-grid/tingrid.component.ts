// import { Component, OnInit, inject } from '@angular/core';
// import { TinService } from '../../services/tin.service';
// import { DatePipe, NgOptimizedImage } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { Observable, catchError, finalize } from 'rxjs';
// import { ApiResult, Product } from '../../services/interfaces';

// @Component({
//   selector: 'app-tingrid',
//   standalone: true,
//   imports: [DatePipe, NgOptimizedImage, RouterModule],
//   templateUrl: './tingrid.component.html',
//   styleUrl: './tingrid.component.scss'
// })
// export class TinGridComponent implements OnInit {
//   private tinService = inject(TinService);

//   currentShow = 8;
//   public products: Product[] = [];
//   values: any[] = [];
//   public isLoading = true;
//   public error = null;
//   public dummyArray = new Array(8);
//   placeholder = 'PLACEHOLDER_CONSTANT';

//   allProducts$ = Observable<any[]>;


//   ngOnInit(): void {
//     //  this.loadProducts();
//     //  this.showAllProducts();
//     this.tinService.allListings().subscribe({
//       next: (listings) => {
//         this.values = listings.results;
//         console.log(`Listings: ${this.values}`);
//       },
//       error: (error) => {
//         this.error = error;
//       }
//     });
//   }


//   async showAllProducts() {
//     this.error = null;
//     this.tinService.allProducts$.subscribe(data => this.products.push(...data.results));
//   }

//   async loadProducts() {
//     this.error = null;

//     this.tinService
//       .getAllProducts(this.currentShow)
//       .pipe(
//         finalize(() => {
//           this.isLoading = false;
//         }),
//         catchError((err: any) => {
//           this.error = err.error.status_message;
//           return [];
//         })
//       )
//       .subscribe({
//         next: (res) => {
//           const arr = res;
//           console.log("Res: ", res);
//           console.log("Arr: ", Object.values(arr));
//           this.values = Object.values(arr);
//           console.log("Products: ", this.values);
//           this.products.push(...this.values);
//          // console.log(`this.products => ${JSON.stringify(this.products)}`);
//           const v = JSON.stringify(this.products);
//           console.log("V ", JSON.parse(v));

//         // this.products.push(...res.results);
//         }
//       })
//   }
// }

import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { TinService } from '../../services/tin.service';
import { map, Observable, take } from 'rxjs';
import { Product } from '../../services/interfaces';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-tingrid',
  templateUrl: 'tingrid.component.html',
  styleUrls: ['tingrid.component.scss'],
  standalone: true,
  imports: [AsyncPipe, CommonModule, ProductCardComponent],
})
export class TinGridComponent implements OnInit {
  #listingService = inject(TinService);
  beauty$!: Observable<any>;
  furniture$!: Observable<Product[]>;
  groceries$!: Observable<Product[]>;

  constructor() {}

  ngOnInit(): void {

      this.getAllBeauty();
      this.getAllFurniture();
      this.getAllGroceries();
    //  this.logCategory()
  }

  getAllBeauty() {
        this.beauty$ = this.#listingService.getAll().pipe(
        map((response: {products: Product[]}) => {
          return response.products?.filter((listing: Product) => listing.category === "beauty")
        })
      );
  }

  getAllFurniture() {
         this.furniture$ = this.#listingService.getAll().pipe(
        map((response: {products: Product[]}) => {
          return response.products?.filter((listing: Product) => listing.category === "furniture")
        })
      );
  }

  // logCategory() {
  //   this.#listingService.getAllByCategory('groceries')
  //     .subscribe(grocery => console.log(`Groceries Log: ${JSON.stringify(grocery.products)}`))
  // }

    getAllGroceries() {
    this.groceries$ = this.#listingService.getAll().pipe(
        map((response: {products: Product[]}) => {
          return response.products?.filter((listing: Product) => listing.category === "groceries")
        }),
        take(3)
      );
  }
}