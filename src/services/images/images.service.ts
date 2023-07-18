import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "primeng/image";


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  // private readonly apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getImageUrl(imageName: string) {
   return `http://localhost:3000/uploads/${imageName}`;
  }

}
