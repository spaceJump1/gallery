import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "primeng/image";


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private readonly apiUrl = 'http://localhost:3000/store';

  constructor(private readonly http: HttpClient) { }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl);
  }
}
