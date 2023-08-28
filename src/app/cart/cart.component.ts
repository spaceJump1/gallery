import {Component, OnInit, OnDestroy} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {IProduct} from "../../model/product";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy {
  cartItems: IProduct[] = [];
  cartItemCount: number = 0;
  private cartItemCountSub: Subscription;

  constructor(private cartService: CartService,
              private http: HttpClient) {
    this.cartItemCountSub = this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }


  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnDestroy(): void {
    this.cartItemCountSub.unsubscribe();
  }

  getTotalCartPrice(): number {
    return this.cartService.getTotalPrice();
  }

  handleFeedback(feedbackData: any): void {

    const orderData = {
      items: this.cartItems,
      feedback:feedbackData
    };

    this.http.post<any>('http://localhost:3000/orders', orderData).subscribe(
      response => {
        // Обработка ответа от сервера
        console.log('Заказ успешно сохранен:', response);
        // Очистка корзины
        this.clearCart();
      },
      error => {
        // Обработка ошибки
        console.error('Ошибка при сохранении заказа:', error);
      }
    );
  }

  trackByFn(index: number, item: IProduct): string {
    return item._id;
  }

  removeItem(item: IProduct): void {
    const index = this.cartItems.findIndex((cartItems) => cartItems._id === item._id);
    if (index !== -1) {
      this.cartItems.splice(index, 1); // Удаление элемента из массива cartItems
      this.cartService.updateCartItems(); // Обновление корзины в сервисе
    }
  }

  clearCart(): void {
    this.cartItems =[];
    this.cartItemCount = 0;
    this.cartService.clearCart();
  }
}
