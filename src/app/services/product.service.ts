import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/products");
  }

  saveProduct(product: Product) {
    return this.http.post<Product>("http://localhost:8080/products", product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`http://localhost:8080/products/${product.id}`, product);
  }

  deleteProduct(product: Product) {
    return this.http.delete<void>(`http://localhost:8080/products/${product.id}`);
  }
}
