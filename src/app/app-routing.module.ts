import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StoreComponent} from "./store/store.component";
import {ContactsComponent} from "./contacts/contacts.component";

import {MainComponent} from "./main-page/main/main.component";
import {PortfolioComponent} from "./main-page/portfolio/portfolio.component";
import {CartComponent} from "./cart/cart.component";

// Определние маршрута
const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: PortfolioComponent},
    ]
  },
  {path: 'store', component: StoreComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
