import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "@app/app.component";
import {HeaderComponent} from "@core/header/header.component";
import {HomeModule} from "@modules/home/home.module";
import {AboutModule} from "@modules/about/about.module";
import {ContactModule} from "@modules/contact/contact.module";
import {AppRoutingModule} from "@app/app-routing.module";
import {SharedModule} from "@shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {ProductReducer} from "@core/state/products/products.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "@core/state/products/products.effects";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ products: ProductReducer }),
    EffectsModule.forRoot([ProductsEffects]),
    SharedModule,
    HomeModule,
    AboutModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
