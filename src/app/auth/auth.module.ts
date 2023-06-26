import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from "./auth.component";
import {TabViewModule} from "primeng/tabview";
import { InputTextModule } from 'primeng/inputtext';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [AuthComponent, AuthorizationComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TabViewModule,
    InputTextModule
  ]
})
export class AuthModule { }
