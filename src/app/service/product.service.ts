import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  actionUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get(this.actionUrl + '/product');
  }
  addProducts(newProduct: Products): Observable<Products> {
    return this.http.post<Products>(this.actionUrl + '/product', newProduct);
  }
  filterProducts(id) {
      return this.http.get(this.actionUrl + '/product/' + id);
  }
  updateProducts(formData, id) {
    return this.http.put(this.actionUrl + '/product/' + id, formData);
}
  deleteProducts(id) {
    return this.http.delete(this.actionUrl + '/product/' + id);
}
  }

