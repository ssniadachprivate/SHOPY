import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "@shared/models/products.model";

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBoxComponent implements OnInit {

  @Input()
  product: ProductsModel = null;

  constructor() { }

  ngOnInit() {
  }

}
