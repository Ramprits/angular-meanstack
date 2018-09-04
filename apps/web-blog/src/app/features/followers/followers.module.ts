import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowersComponent } from './followers.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@myworkspace/core/services/auth/auth.guard';
import { SideNavModule } from '@app/src/app/features/side-nav/side-nav.module';

export const routes: Routes = [
  {
    path: '',
    component: FollowersComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SideNavModule],
  declarations: [FollowersComponent]
})
export class FollowersModule {}
