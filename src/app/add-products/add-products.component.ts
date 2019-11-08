import { Component, OnInit, OnChanges, DoCheck, AfterContentInit  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      description : new FormControl(''),
      price : new FormControl(''),
      image : new FormControl(''),
      imageAlt : new FormControl(''),
      isAvailable : new FormControl(''),
    });
  }
  onSubmit(data) {
      console.log(data);
  }
}
