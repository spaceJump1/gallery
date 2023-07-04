import { Injectable } from '@angular/core';
import {IProduct} from "../../model/product";
import {ObjectId} from 'mongodb';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProduct[] = [];

  constructor() { }

  addToCart(product: IProduct): void {
    if (!this.isProductInCart(product)) {
      this.cartItems.push(product); // Обновление массива cartItems
      console.log('Товар добавлен в корзину');
    }
  }


  isProductInCart(product: IProduct): boolean {
    return this.cartItems.some((item) => item._id === product._id);
  } // нужно спросить как формировать id на сервере

  getCartItems(): IProduct[] {
    return this.cartItems;
  }

}
