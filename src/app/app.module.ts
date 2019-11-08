import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add-product', component: AddProductsComponent },
  { path: 'product-description/:id', component: ProductDescriptionComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    AddProductsComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
