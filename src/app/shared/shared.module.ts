import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductBoxComponent} from "@shared/components/product-box/product-box.component";
import {InfoBoxComponent} from "@shared/components/info-box/info-box.component";
import { CartBoxComponent } from './components/cart-box/cart-box.component';

@NgModule({
  declarations: [
    InfoBoxComponent,
    ProductBoxComponent,
    CartBoxComponent,
  ],
  exports: [
    InfoBoxComponent,
    ProductBoxComponent,
    CartBoxComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
