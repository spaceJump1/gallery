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
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "./store/store.module";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {CartService} from "../services/cart/cart.service";
import {CartModule} from "./cart/cart.module";
import {AngularYandexMapsModule} from "angular8-yandex-maps";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        BottomInfoComponent,
        ContactsComponent,
        PortfolioComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        MenubarModule,
        InputTextModule,
        ScrollTopModule,
        AvatarModule,
        BrowserAnimationsModule,
        ImageModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        StoreModule,
        ButtonModule,
        BadgeModule,
        CartModule,
      AngularYandexMapsModule
    ],
    providers: [CartService],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
