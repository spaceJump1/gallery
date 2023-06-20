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
import { PortfolioComponent } from './portfolio/portfolio.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Настройка маршрутизации с пустым массивом роутов
    MenubarModule,
    InputTextModule,
    ScrollTopModule,
    AvatarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
