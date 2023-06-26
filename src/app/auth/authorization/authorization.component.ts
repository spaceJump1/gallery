import {Component} from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  loginText: string = 'Логин';
  passwordText: string = 'Пароль';

  login: string;
  password: string;

  selectedValue: boolean;

  constructor() {
    this.password = '';
    this.login = '';
    this.selectedValue = false;
  }

}
