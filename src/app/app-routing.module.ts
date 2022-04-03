import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SearchByBrandComponent } from './components/search-by-brand/search-by-brand.component';
import { SearchProductComponent } from './components/search-product/search-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'search-product', component: SearchProductComponent },
  { path: 'search-by-brand', component: SearchByBrandComponent },
  { path: 'product-page', component: ProductPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
