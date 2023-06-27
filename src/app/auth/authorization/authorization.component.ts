import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit{
  loginText: string = 'Логин';
  passwordText: string = 'Пароль';

  login: string;
  password: string;

  selectedValue: boolean;

  btnText: string;

  constructor() {
    this.password = '';
    this.login = '';
    this.selectedValue = false;
    this.btnText = '';
  }

  ngOnInit() {
    this.btnText = 'Войти'
  }


}
