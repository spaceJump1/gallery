import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  getSafeImgUrl(imgPath: string): SafeResourceUrl {
    const imgUrl = `assets/img-main/${imgPath}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imgUrl);
  }
}
