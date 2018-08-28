import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
const base_url = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<{ message: string; products: any[] }> {
    return this.http.get<{ message: string; products: any[] }>(
      `${base_url}/api/products`
    );
  }
  addProduct(productDate): Observable<any> {
    return this.http.post<any>(`${base_url}/api/products`, productDate);
  }
}
