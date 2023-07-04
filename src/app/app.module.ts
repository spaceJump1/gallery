import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

import {RouterModule} from "@angular/router";
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from "primeng/inputtext";
import {ScrollTopModule} from 'primeng/scrolltop';
import {AvatarModule} from 'primeng/avatar';
import {MainComponent} from './main-page/main/main.component';
import {PortfolioComponent} from './main-page/portfolio/portfolio.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ImageModule} from "primeng/image";
import {BottomInfoComponent} from './main-page/bottom-info/bottom-info.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AuthModule} from "./auth/auth.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "./store/store.module";
import { CartComponent } from './cart/cart.component';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BottomInfoComponent,
    ContactsComponent,
    PortfolioComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Настройка маршрутизации с пустым массивом роутов
    MenubarModule,
    InputTextModule,
    ScrollTopModule,
    AvatarModule,
    BrowserAnimationsModule,
    ImageModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    StoreModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
