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
import {MainComponent} from './main/main.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ImageModule} from "primeng/image";
import {BottomInfoComponent} from './bottom-info/bottom-info.component';
import {StoreComponent} from './store/store.component';
import {ContactsComponent} from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PortfolioComponent,
    BottomInfoComponent,
    StoreComponent,
    ContactsComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
