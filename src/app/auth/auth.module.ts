import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from "./auth.component";
import {TabViewModule} from "primeng/tabview";
import {InputTextModule} from 'primeng/inputtext';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    AuthComponent,
    AuthorizationComponent,
    RegistrationComponent
  ],
  imports: [
    AuthRoutingModule,
    TabViewModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    CheckboxModule
  ]
})
export class AuthModule {
}
