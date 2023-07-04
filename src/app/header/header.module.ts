import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header.component";
import {CartService} from "../../../services/cart/cart.service";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  providers: [CartService]
})
export class HeaderModule { }
