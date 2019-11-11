import { Component, OnInit, OnChanges, DoCheck, AfterContentInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  myForm: FormGroup;
  constructor(private addProduct: ProductService) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description : new FormControl('', [Validators.required, Validators.maxLength(500)] ),
      price : new FormControl('', Validators.required),
      image : new FormControl('', Validators.required),
      imageAlt : new FormControl('', Validators.required),
      isAvailable : new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    // console.log(this.myForm.value);
    console.log('Valid? : "', form.valid , '"' );
    console.log('Product Name : "', form.value.name, '"' );
    console.log('Product Description : "', form.value.description,  '"' );
    console.log('Product Price : "', form.value.price,  '"' );
    console.log('Product Image : "', form.value.image,  '"' );
    console.log('Product imageAlt : "', form.value.imageAlt,  '"' );
    console.log('Product availability : "', form.value.isAvailable,  '"' );
    if ( form.valid ) {
      this.addProduct.addProducts(this.myForm.value);
    } else {
      alert( ' Not Valid ' );
    }
  }
}
