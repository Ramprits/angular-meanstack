import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { AuthGuard } from '@myworkspace/core/services/auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { SideNavModule } from '../side-nav/side-nav.module';
import { PrimengModule } from '../shared/primeng.module';
export const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DialogModule,
    PrimengModule,
    SideNavModule
  ],
  declarations: [NotificationsComponent]
})
export class NotificationsModule {}
