import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from "./store.component";
import { CardModule } from 'primeng/card';
import {ButtonModule} from "primeng/button";
import {TruncatePipe} from 'src/pipes/truncate.pipe'
import {DialogModule} from "primeng/dialog";
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [StoreComponent, TruncatePipe],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
  ],
  providers: [MessageService]
})
export class StoreModule { }
