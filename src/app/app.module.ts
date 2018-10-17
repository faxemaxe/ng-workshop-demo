import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductWrapperComponent } from './product-wrapper/product-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ProductOverviewComponent,
    PageNotFoundComponent,
    NavComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
