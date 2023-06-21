import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolioItems : any[] = [
    { imgPath: 'assets/img/img 1.jpg', caption: 'Вихрь эмоций', isHovered: false},
    { imgPath: 'assets/img/img 3.jpg', caption: 'Хаос и гармония', isHovered: false},
    { imgPath: 'assets/img/img 5.jpg', caption: 'Танец света и тени', isHovered: false},
    { imgPath: 'assets/img/img 7.jpg', caption: 'Мелодия без слов', isHovered: false},
    { imgPath: 'assets/img/img 9.jpg', caption: 'Переплетение мыслей', isHovered: false},
  ];

  portfolioItemsTwo : any[] = [
    { imgPath: 'assets/img/img 2.jpg', caption: 'Разрушение и возрождение', isHovered: false },
    { imgPath: 'assets/img/img 4.jpg', caption: 'Отражение души', isHovered: false},
    { imgPath: 'assets/img/img 6.jpg', caption: 'Космический пейзаж', isHovered: false},
    { imgPath: 'assets/img/img 8.jpg', caption: 'Аурора внутреннего мира', isHovered: false},
    { imgPath: 'assets/img/img 10.jpg', caption: 'Ритмы абстракции', isHovered: false},
  ];

  isExpanded: boolean = false;
  visibleItemCount: number = 2;

  constructor(
    private sanitizer: DomSanitizer) {}

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {
      this.visibleItemCount = this.portfolioItems.length + this.portfolioItemsTwo.length;
    } else {
      this.visibleItemCount = 2;
    }
  }

  getSafeImgUrl(imgPath: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(imgPath);
  }
}
