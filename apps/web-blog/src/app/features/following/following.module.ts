import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FOLLOWING_COMPONENT,
  FollowingComponent
} from 'apps/web-blog/src/app/features/following';
import { SharedModule } from 'apps/web-blog/src/app/features/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@myworkspace/core/services/auth/auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SideNavModule } from '../side-nav/side-nav.module';
export const routes: Routes = [
  {
    path: '',
    component: FollowingComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    SideNavModule
  ],
  declarations: [...FOLLOWING_COMPONENT],
  exports: [...FOLLOWING_COMPONENT]
})
export class FollowingModule {}
