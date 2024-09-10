import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../../services/interfaces';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
 // @Input() title = '';
 // title: string = '';
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

  ngOnInit(): void {
      this.#route.params.subscribe((params) => {

       this.item = JSON.parse(params['item'])
       const {title, description, image, price, brand, category, rating} = this.item;
       this.itemTitle = title;
       this.itemDescription = description;
       this.itemThumb = image;
       this.itemPrice = price;
       this.itemCategory = category;
       this.itemBrand = brand;
       this.itemRating = rating;
       console.log(`This item: ${JSON.stringify(this.item)}`)
      // console.log(`Title: ${title}`)
       console.log(`Desc: ${this.itemDescription}`)
      })

  }

  goBack() {
    this.#location.back();
  }
}