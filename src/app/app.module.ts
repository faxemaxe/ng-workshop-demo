import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

const appRoutes: Routes = [
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'products',
    component: ProductOverviewComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ProductOverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
