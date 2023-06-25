import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {MenuItem} from "primeng/api";
import { ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[];

  constructor(
    private route: RouterModule,
    private elementRef: ElementRef
  ) {
    this.items =[
      {
        label: 'Главная',
        routerLink: '/'
      },
      {
        label: 'Магазин',
        routerLink: '/store'
      },
      {
        label: 'Контакты',
        routerLink: '/contacts'
      }
    ];
  }

  ngAfterViewInit() {
    const itemsElements = this.elementRef.nativeElement.querySelectorAll('.p-menubar-root-list');
    itemsElements.forEach((element: HTMLElement) => {
      element.classList.add('ms-5');
    });
  }
}
