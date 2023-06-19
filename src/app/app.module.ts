import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {RouterModule} from "@angular/router";
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule} from "primeng/inputtext";
import { ScrollTopModule } from 'primeng/scrolltop';
import { AvatarModule } from 'primeng/avatar';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Настройка маршрутизации с пустым массивом роутов
    MenubarModule,
    InputTextModule,
    ScrollTopModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
