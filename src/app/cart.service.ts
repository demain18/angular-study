import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ProductInterface[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: ProductInterface) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrice() {
    return this.http.get<{ type: string; price: number }[]>( 
      '/assets/shipping.json'
    );
  }
}
