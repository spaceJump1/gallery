import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../../model/product";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: IProduct[] = [];
  formData: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<IProduct[]>('http://localhost:3000/store').subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showDialog(product: IProduct): void {
    product.visible = true;
  }

  hideDialog(product: IProduct): void {
    product.visible = false;
  }

  showNewDialog(product: IProduct): void {
    product.dialogVisible = true;
  }

  hideNewDialog(product: IProduct): void {
    product.dialogVisible = false;
  }

  submitForm(): void {
    console.log(this.formData);
  }
}
