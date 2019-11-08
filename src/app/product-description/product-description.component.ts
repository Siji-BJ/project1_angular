import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/Product';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() item: Products;
  constructor() {
     }

  ngOnInit() {
  }

}
