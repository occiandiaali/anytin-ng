import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Location } from '@angular/common';
import { Product } from '../../services/interfaces';
import { TinService } from '../../services/tin.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  item!: any;
  itemTitle = '';
  itemDescription = '';
  itemThumb = '';
  itemPrice = 0;
  itemBrand = '';
  itemRating = 0;
  itemCategory = '';

  #location = inject(Location);
  #route = inject(ActivatedRoute);
  #router = inject(Router);
  #tinService = inject(TinService);

  ngOnInit(): void {
      this.receiveParamsToSubTo();
  }

    receiveParamsToSubTo() {
    this.#route.params.subscribe((params) => {
      let id = params['id'];
      this.#tinService.getSingleTin(id)
        .subscribe((item: any) => {
          this.itemTitle = item.title;
          this.itemThumb = item.thumbnail;
          this.itemDescription = item.description;
          this.itemBrand = item.brand;
          this.itemCategory = item.category;
          this.itemPrice = item.price;
          this.itemRating = item.rating;
          console.log(`Detailed item: ${JSON.stringify(item)}`);
        });
    })
  }

  goBack() {
    this.#location.back();
  }
}