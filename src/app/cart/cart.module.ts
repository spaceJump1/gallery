import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from "./cart.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import { AutoCompleteModule } from 'primeng/autocomplete';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputSwitchModule} from "primeng/inputswitch";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CartComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    InputSwitchModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [
    provideNgxMask()
  ]
})
export class CartModule { }
