import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../../model/product";
import {CartService} from "../../services/cart/cart.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private http: HttpClient,
              private cartService: CartService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<IProduct[]>('http://localhost:3000/store').subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showDialog(product: IProduct): void {
    product.visible = true;
  }

  hideDialog(product: IProduct): void {
    product.visible = false;
  }

  addToCart(product: IProduct): void {
    if (!this.cartService.isProductInCart(product)) {
      this.cartService.addToCart(product);
      this.messageService.add({ severity: 'success', detail: 'Товар добавлен в корзину' });
    } else {
      this.messageService.add({ severity: 'error', detail: 'Картины продаются в единственном' +
          ' экземпляре' });
    }
  }
}
