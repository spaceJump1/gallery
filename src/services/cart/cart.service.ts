import { Injectable } from '@angular/core';
import {IProduct} from "../../model/product";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProduct[] = [];
  private cartItemCountSubj: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartItemCount$: Observable<number> = this.cartItemCountSubj.asObservable();

  constructor() { }

  addToCart(product: IProduct): void {
    if (!this.isProductInCart(product)) {
      this.cartItems.push(product); // Обновление массива cartItems
      this.cartItemCountSubj.next(this.cartItems.length);
      console.log('Товар добавлен в корзину');
    }
  }

  isProductInCart(product: IProduct): boolean {
    return this.cartItems.some((item) => item._id === product._id);
  }

  getCartItems(): IProduct[] {
    return this.cartItems;
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  private updateCartItemCount(): void {
    const cartItemCount = this.cartItems.length;
    this.cartItemCountSubj.next(cartItemCount);
  }
}
