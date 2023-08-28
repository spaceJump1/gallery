import {Injectable} from '@angular/core';
import {IProduct} from "../../model/product";
import {BehaviorSubject, Observable} from "rxjs";
import { CartStateService } from "./cartstate/cartstate.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProduct[] = [];
  private cartItemCountSubj: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartItemCount$: Observable<number> = this.cartItemCountSubj.asObservable();

  constructor(private cartState: CartStateService) {
  }

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

  getTotalPrice(): number {
    let totalPrice = 0;
    const cartItems = this.getCartItems();

    for (const item of cartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  updateCartItems(): void {
    // this.cartItems = [...this.cartItems];
    this.cartItemCountSubj.next(this.cartItems.length);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemCountSubj.next(0);
  }
}


