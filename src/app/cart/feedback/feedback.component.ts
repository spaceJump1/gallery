import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartStateService} from "../../../services/cart/cartstate/cartstate.service";
import { CartService} from "../../../services/cart/cart.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  city: string = '';
  address: string = '';
  checked: boolean = false;

  isCartEmpty: boolean = true;

  public customPatterns = { '0': { pattern: new RegExp('\[0-9\]')} };

  @Output() feedbackSubmitted = new EventEmitter<any>();

  constructor(private cartState: CartStateService,
              private cartService: CartService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.isCartEmpty = count === 0;
    });
  }

  submitFeedback() {
    if (this.isCartEmpty) {
      console.log('Корзина пуста. Невозможно отправить заказ.');
      return;
    }

    if (!this.isFormValid()) {
      console.log('Заполните форму');
      return;
    }

    const feedbackData = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        delivery: this.checked,
        city: this.city,
        address: this.address
    };

    this.feedbackSubmitted.emit(feedbackData);

    this.messageService.add({severity: 'success', summary: 'Успех', detail: 'Ваши данные направлены нашему' +
        ' менеджеру, ожидайте звонок'})
  }

  onDeliveryChange(event: any) {
    this.checked = event; // Присваиваем новое значение переменной delivery
    console.log('Delivery changed:', this.checked);
  }

  isFormValid(): boolean {
    if (!this.firstName || !this.lastName) {
      return false;
    }

    if (this.isNumeric(this.firstName) ||
      this.isNumeric(this.lastName) ||
      (this.checked && (this.isNumeric(this.address) ||
        this.isNumeric(this.city)))) {
      return false;
    }

    return true;
  }

  private isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
  }
}
