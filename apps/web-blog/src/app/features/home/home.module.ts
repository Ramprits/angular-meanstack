import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent, CommentComponent } from './components';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SideNavModule } from '../side-nav/side-nav.module';
import { AuthGuard } from '@myworkspace/core/services/auth/auth.guard';
import { PrimengModule } from '@app/src/app/features/shared/primeng.module';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: CommentComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    SideNavModule,
    PrimengModule
  ],
  declarations: [...HOME_COMPONENTS],
  exports: [...HOME_COMPONENTS]
})
export class HomeModule {}
