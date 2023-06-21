import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {trigger, state, style, animate, transition} from "@angular/animations";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('textChange', [
      state('russian', style({opacity: 1})),
      state('english', style({opacity:0})),
      state('chinese', style({opacity:0})),
      state('spanish', style({opacity:0})),
      transition('* => *', animate('500ms')),
    ]),
  ],
})

export class MainComponent {
  languages = ['Привет, мы галерея', 'Hello, we are gallery', 'Hola, somos una galería', '你好，我们是画廊'];
  currentLanguageIndex = 0;
  currentLanguage = this.languages[this.currentLanguageIndex];

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  getSafeImgUrl(imgPath: string): SafeResourceUrl {
    const imgUrl = `assets/img-main/${imgPath}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imgUrl);
  }

  ngOnInit() {
    this.startLanguageChange();
  }

  startLanguageChange() {
    setInterval(() => {
      this.currentLanguageIndex = (this.currentLanguageIndex + 1) % this.languages.length;
      this.currentLanguage = this.languages[this.currentLanguageIndex];
    }, 1000);
  }
}
