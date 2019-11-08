import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(private productComponent: ProductService) { }

  getProductsFromService(): void {
    this.products = this.productComponent.getProducts();
    console.log(this.products.length);
  }

  ngOnInit() {
    this.getProductsFromService();
  }
}
