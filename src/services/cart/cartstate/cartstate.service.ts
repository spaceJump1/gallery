import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartStateService {
  private cartItemCountSubj: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartItemCount$: Observable<number> = this.cartItemCountSubj.asObservable();

  constructor() { }

  updateCartItemCount(count: number): void {
    this.cartItemCountSubj.next(count);
  }
}
