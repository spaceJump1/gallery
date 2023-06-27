import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from "./store.component";
import { CardModule } from 'primeng/card';
import {ButtonModule} from "primeng/button";
import {TruncatePipe} from 'src/pipes/truncate.pipe'
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [StoreComponent, TruncatePipe],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule
  ]
})
export class StoreModule { }
