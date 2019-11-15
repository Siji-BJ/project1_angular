import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  count = 0;
  constructor(private productComponent: ProductService) { }

  getProductsFromService(): void {
    this.productComponent.getProducts().subscribe(response => {
      console.log(response);
      this.products = response;
  });
    // console.log(this.products.length);
  }

  ngOnInit() {
    this.getProductsFromService();
  }
  deleted(event) {
    this.getProductsFromService();
  }
  increment(event) {
    this.count++;
    console.log(this.count);
  }
}
