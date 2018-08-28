import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@myworkspace/core/services/auth/auth.guard';
import {
  PRODUC_COMPONENTS,
  AddProductComponent,
  ProductComponent
} from './index';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule
  ],
  declarations: [PRODUC_COMPONENTS],
  exports: [PRODUC_COMPONENTS]
})
export class ProductModule {}
