import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MenuItem} from "primeng/api";
import { ElementRef } from '@angular/core';
import {Subscription} from "rxjs";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  cartItemCount: string = '0';
  private cartItemCountSubs: Subscription | undefined;

  constructor(
    private route: RouterModule,
    private elementRef: ElementRef,
    private cartService: CartService,
  ) {
    this.items =[
      {
        label: 'Главная',
        routerLink: '/'
      },
      {
        label: 'Магазин',
        routerLink: 'store'
      },
      {
        label: 'Контакты',
        routerLink: 'contacts'
      }
    ];
  }

  ngOnInit():void {
    this.cartItemCountSubs = this.cartService.cartItemCount$.subscribe((count: number) => {
      this.cartItemCount = count.toString();
    });
  }

  ngAfterViewInit() {
    const itemsElements = this.elementRef.nativeElement.querySelectorAll('.p-menubar-root-list');
    itemsElements.forEach((element: HTMLElement) => {
      element.classList.add('ms-5');
    });
  }

  ngOnDestroy(): void {
    if (this.cartItemCountSubs) {
      this.cartItemCountSubs.unsubscribe();
    }
  }
}
