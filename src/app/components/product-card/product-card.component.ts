import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

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
}