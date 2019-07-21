import { Component } from '@angular/core';
import {Product} from './models/Product';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<h1>All Products</h1>' +
    '<ul>' +
    '<li *ngFor="let product of products">' +
    '{{product.title}}' +

    '</li>' +
    '</ul>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Array<Product> = [];
  title = 'angular-with-typescript';
}
