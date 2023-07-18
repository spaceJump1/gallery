import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartStateService} from "../../../services/cart/cartstate/cartstate.service";
import { CartService} from "../../../services/cart/cart.service";
import {MessageService} from "primeng/api";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;

  checked: boolean = false;

  isCartEmpty: boolean = true;

  public customPatterns = { '0': { pattern: new RegExp('\[0-9\]')} };

  @Output() feedbackSubmitted = new EventEmitter<any>();

  constructor(private cartState: CartStateService,
              private cartService: CartService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      fName: new FormControl('', [Validators.required, Validators.minLength(2), this.ngDigitsValidator]),
      lName: new FormControl('', [Validators.required, Validators.minLength(2), this.ngDigitsValidator]),
      pNumb: new FormControl('', {validators: Validators.required}),
      delivery: new FormControl(''),
      userCity: new FormControl(''),
      userAddress: new FormControl('')
    })

    this.cartService.cartItemCount$.subscribe(count => {
      this.isCartEmpty = count === 0;
    });
  }

  // Кнопка формы
  submitFeedback() {
    if (this.isCartEmpty) {
      return;
    }

    const feedbackData = {
        firstName: this.feedbackForm.get('fName')?.value,
        lastName: this.feedbackForm.get('lName')?.value,
        phoneNumber: this.feedbackForm.get('pNumb')?.value,
        delivery: this.checked,
        city: this.feedbackForm.get('userCity')?.value,
        address: this.feedbackForm.get('userAddress')?.value
    };

    this.feedbackSubmitted.emit(feedbackData);

    this.messageService.add({severity: 'success', summary: 'Успех', detail: 'Ваши данные направлены нашему' +
        ' менеджеру, ожидайте звонок'})
  }

  // Работа switch
  onDeliveryChange(event: any) {
    this.checked = event; // Присваиваем новое значение переменной delivery
  }

  // Валидатор для проверки отсутсвия цифр в значении поля Digits(цифры)
  ngDigitsValidator(control: AbstractControl) {
    const value = control.value;
    const hasDigits = /\d/.test(value); // Проверка наличия цифр в значении
    const hasSpaces = /\s{2,}/.test(value);

    if (hasDigits || hasSpaces) {
      return {hasDigits: true};
    } else {
      return null
    }
  }

  // Проверка формы на валидные данные
  isFormValid(): boolean {
    if (!this.feedbackForm) {
      return false;
    }

    const fName = this.feedbackForm.get('fName');
    const lName = this.feedbackForm.get('lName');
    const pNumb = this.feedbackForm.get('pNumb');

    if (
      fName && fName.valid &&
      lName && lName.valid &&
      pNumb && pNumb.valid
    ) {
      return false;
    }
    return true;
  }
}
