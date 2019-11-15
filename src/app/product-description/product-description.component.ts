import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Products } from 'src/app/models/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
   @Input() item: Products;
  @Output() isDeleted = new EventEmitter<boolean>();
  @Output() isIncremented = new EventEmitter();
  constructor(private productService: ProductService) {
     }

  ngOnInit() {
  }
  delete(id) {
      this.productService.deleteProducts(id).subscribe(data => {
        alert('successfully deleted');
        this.isDeleted.emit();
      });
  }
  addCount() {
    this.isIncremented.emit();

  }
}
