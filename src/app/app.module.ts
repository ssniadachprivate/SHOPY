import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "@app/app.component";
import {HeaderComponent} from "@core/header/header.component";
import {ProductBoxComponent} from "@shared/components/product-box/product-box.component";
import {InfoBoxComponent} from "@shared/components/info-box/info-box.component";
import {HomeModule} from "@modules/home/home.module";
import {AboutModule} from "@modules/about/about.module";
import {ContactModule} from "@modules/contact/contact.module";
import {AppRoutingModule} from "@app/app-routing.module";
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
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
