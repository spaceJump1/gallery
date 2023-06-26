import { Component } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-bottom-info',
  templateUrl: './bottom-info.component.html',
  styleUrls: ['./bottom-info.component.scss']
})
export class BottomInfoComponent {
  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  getSafeImgUrl(imgPath: string): SafeResourceUrl {
    const imgUrl = `assets/img-main/${imgPath}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imgUrl);
  }
}
