import { ProductEditReactiveComponent } from './product-edit-reactive/product-edit-reactive.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ProductWrapperComponent } from './product-wrapper/product-wrapper.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'sandbox',
    component: SandboxComponent,
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'products',
    component: ProductWrapperComponent,
    children: [
      {
        path: '',
        component: ProductOverviewComponent
      },
      {
        path: ':id/detail',
        component: ProductDetailComponent
      },
      {
        path: ':id/edit',
        component: ProductEditReactiveComponent
      },
      {
        path: 'create',
        component: ProductEditComponent
      },
    ]
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/start'
  },
  {
    path: '**',
    redirectTo: '/404'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
