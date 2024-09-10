import { Component, inject, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [NgIf],
  standalone: true,
})
export class ProductCardComponent {
  @Input() title?: string;
  @Input() brand?: string;
  @Input() thumbnail?: string;
  @Input() price?: string;
  @Input() rating?: string;
  @Input() category?: string;
  @Input() description?: string;

  #router = inject(Router);

  goToDetails() {
   this.#router.navigate(['/details', JSON.stringify({
    title: this.title,
    image: this.thumbnail,
    description: this.description,
    price: this.price,
    brand: this.brand,
    category: this.category,
    rating: this.rating
   })])
  }
}