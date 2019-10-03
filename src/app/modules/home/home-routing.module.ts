import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ProductDetailsComponent} from "@modules/home/product-details/product-details.component";
import {ProductListComponent} from "@modules/home/product-list/product-list.component";

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'details',
        component: ProductDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
