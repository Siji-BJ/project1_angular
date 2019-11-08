import { Component, OnInit, OnChanges, DoCheck, AfterContentInit  } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements  OnChanges, OnInit, DoCheck, AfterContentInit {
  constructor() { }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }


}
