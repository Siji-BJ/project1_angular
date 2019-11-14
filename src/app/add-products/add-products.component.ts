import { Component, OnInit, OnChanges, DoCheck, AfterContentInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  myForm: FormGroup;
  id: number;
  private sub: any;
  private formData: any;
  constructor(private addProduct: ProductService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[a-z]+$')]),
      description : new FormControl('', [Validators.required, Validators.maxLength(500)] ),
      price : new FormControl('', [Validators.required,  Validators.pattern('[0-9]+$')]),
      imageUrl : new FormControl('', [Validators.required]),
      isAvailable : new FormControl(''),
    });

    this.sub = this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.id = +params['id'];
      this.addProduct.filterProducts(this.id).subscribe(data => {
        this.formData = data;
        this.myForm.patchValue({
          title: this.formData.title,
          description: this.formData.description,
          price: this.formData.price,
          imageUrl: this.formData.imageUrl,
          isAvailable: this.formData.isAvailable
          });
   });
  });


  }
  onSubmit(form: FormGroup) {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      if (this.id) {
        this.addProduct.updateProducts(form.value, this.id ).subscribe(data => {
          console.log(data);
        });
      } else {
        this.addProduct.addProducts(form.value).subscribe(data => {
        });
      }
    });
  }
}
