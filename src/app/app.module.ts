import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NewCarsComponent } from './components/home/new-cars/new-cars.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SearchByBrandComponent } from './components/search-by-brand/search-by-brand.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewCarsComponent,
    AboutUsComponent,
    SearchProductComponent,
    PrivacyPolicyComponent,
    SearchByBrandComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
